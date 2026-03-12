import { useState } from 'react';
import {
  Text,
  Heading,
  Flex,
  Box,
  Icon,
  ActionButton,
  CTAButton,
  IconFigure,
  InitialsFigure,
  FigureStack,
  ProgressBar,
} from '@framework/components/ariane';

const TEMPLATE_IMAGES = [
  { title: 'Usability testing\na new product', color: '#E8F0FE' },
  { title: 'Collect insights\non features', color: '#FFF3E0' },
  { title: 'Test CTA placement', color: '#E8F5E9' },
  { title: 'Get fast NPS\nfeedback', color: '#FFF8E1' },
  { title: 'View all templates', color: '#F3E5F5', count: '+50' },
];

const NAV_ITEMS = [
  { icon: 'home', label: 'Home', active: true },
  { icon: 'search', label: 'Search' },
  { icon: 'folder', label: 'Projects' },
  { icon: 'tester-cards', label: 'Reach' },
  { icon: 'credits', label: 'Credits' },
];

const BOTTOM_NAV_ITEMS = [
  { icon: 'credits', label: 'Product updates' },
  { icon: 'alert', label: 'Support', hasChevron: true },
  { icon: 'question-mark-circle', label: 'Settings', hasChevron: true },
  { icon: 'settings', label: 'Label' },
];

const GUIDE_STEPS = [
  { number: 1, title: 'Create your first study', description: 'Build both moderated and unmoderated studies on your trial.\n\nNot ready to start testing? Visit our demos.', active: true },
  { number: 2, title: 'Recruit participants' },
  { number: 3, title: 'Analyze results' },
  { number: 4, title: 'Share findings' },
];

const RESOURCE_LINKS = [
  { title: 'Get Started Guide', description: 'Learn how to build your first maze.' },
  { title: 'Help center', description: 'FAQs, tips, and tricks.' },
  { title: 'Maze university', description: 'Live and on-demand training videos.' },
];

function SidebarNavItem({ icon, label, active, hasChevron }) {
  return (
    <Flex
      alignItems="center"
      gap="MD"
      className={`h-12 px-4 py-3 cursor-pointer hover:bg-[#F8F8FB] transition-colors ${active ? 'bg-[#F0FAFF]' : ''}`}
    >
      <Icon name={icon} size="24px" color={active ? '#0568FD' : '#535A74'} />
      <Text
        className="flex-1 truncate"
        style={{ color: active ? '#0568FD' : '#535A74' }}
      >
        {label}
      </Text>
      {hasChevron && <Icon name="chevron-right" size="24px" color="#535A74" />}
    </Flex>
  );
}

function TemplateCard({ title, color, count }) {
  const lines = title.split('\n');
  return (
    <div className="flex-1 min-w-0 bg-white rounded-lg overflow-hidden shadow-[inset_0px_0px_0px_0.5px_rgba(108,113,140,0.28)] cursor-pointer hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-shadow">
      <div className="px-2 pt-4 pb-2 flex flex-col items-center gap-2">
        <div
          className="w-[168px] h-[118px] rounded-lg flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          {count && (
            <Text className="text-sm text-[#3C3C3C]">{count}</Text>
          )}
        </div>
        <Text className="text-center leading-6">
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </Text>
      </div>
    </div>
  );
}

function ExploreCard({ icon, iconColor, title, description }) {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-lg p-6 flex flex-col justify-between gap-6 shadow-[inset_0px_0px_0px_0.5px_rgba(108,113,140,0.28)]">
      <div className="flex flex-col gap-6">
        <IconFigure name={icon} color={iconColor} size="LG" mode="light" />
        <div className="flex flex-col gap-2">
          <Heading level={3}>{title}</Heading>
          <Text color="default.main.secondary">{description}</Text>
        </div>
      </div>
      <CTAButton emphasis="tertiary" size="SM">Explore</CTAButton>
    </div>
  );
}

function ResourceItem({ title, description, isLast }) {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" className={isLast ? 'pt-3' : 'pb-3'}>
        <div className="flex flex-col gap-1">
          <Text className="font-semibold">{title}</Text>
          <Text color="default.main.secondary" className="text-sm">{description}</Text>
        </div>
        <ActionButton emphasis="tertiary" size="SM" iconOnly aria-label="Open">
          <Icon name="preview" size="16px" />
        </ActionButton>
      </Flex>
      {!isLast && <div className="h-px bg-[rgba(108,113,140,0.08)]" />}
    </>
  );
}

function WelcomeGuide({ isExpanded, onToggle }) {
  return (
    <div className="flex flex-col rounded-lg shadow-[0px_16px_24px_rgba(0,0,0,0.06),0px_2px_6px_rgba(0,0,0,0.04),0px_0px_1px_rgba(0,0,0,0.06)] overflow-hidden w-[356px]">
      <div className="bg-[#282D40] rounded-lg flex flex-col">
        <Flex alignItems="center" justifyContent="space-between" className="p-6">
          <Text className="text-xl font-semibold text-white">Welcome to Maze guide</Text>
          <ActionButton
            emphasis="tertiary"
            size="SM"
            iconOnly
            aria-label="Minimize"
            onClick={onToggle}
            className="!bg-[#282D40] !text-[#9597B0] !shadow-[inset_0px_0px_0px_0.5px_rgba(108,113,140,0.28)]"
          >
            <Icon name="minimize" size="16px" />
          </ActionButton>
        </Flex>

        <div className="h-1 w-full relative">
          <div className="absolute inset-0 bg-[#9597B0] rounded" />
          <div className="absolute inset-y-0 left-0 w-[10%] bg-[#0568FD] rounded" />
        </div>

        <div className="shadow-[inset_0px_-0.5px_0px_0px_rgba(108,113,140,0.28)]" />

        {isExpanded && (
          <div className="flex flex-col gap-3">
            {GUIDE_STEPS.map((step) => (
              <div
                key={step.number}
                className={`px-6 ${step.active ? 'bg-[rgba(5,104,253,0.28)] py-6' : 'py-2'} ${step.number === GUIDE_STEPS.length ? 'pb-6' : ''}`}
              >
                <Flex gap="SM" alignItems="flex-start">
                  <Text className="font-semibold text-white w-5 shrink-0">
                    {step.number}
                  </Text>
                  <div className="flex flex-col gap-2">
                    <Text className={`font-semibold ${step.active ? 'text-white' : 'text-[#9597B0]'}`}>
                      {step.title}
                    </Text>
                    {step.description && (
                      <Text className="text-sm text-white whitespace-pre-line leading-5">
                        {step.description}
                      </Text>
                    )}
                  </div>
                </Flex>
              </div>
            ))}

            <div className="px-6 pb-6 pt-2">
              <Text className="text-sm text-[#6C718C] underline cursor-pointer hover:text-[#9597B0]">
                Don't show this again
              </Text>
            </div>
          </div>
        )}

        <Flex
          alignItems="center"
          gap="MD"
          className="p-3 bg-[#282D40] rounded-lg shadow-[inset_0px_-0.5px_0px_0px_rgba(108,113,140,0.28)] cursor-pointer hover:bg-[#323750]"
          onClick={onToggle}
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <circle cx="16" cy="16" r="14" fill="none" stroke="#9597B0" strokeWidth="2" />
              <circle
                cx="16" cy="16" r="14"
                fill="none" stroke="#0568FD" strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 14 * 0.1} ${2 * Math.PI * 14 * 0.9}`}
                strokeLinecap="round"
                transform="rotate(-90 16 16)"
              />
            </svg>
            <Text className="absolute text-sm text-[#9597B0]">0/5</Text>
          </div>
          <Text className="font-semibold text-white">NEXT: Launch a study</Text>
        </Flex>
      </div>
    </div>
  );
}

function TouchpointV1() {
  const [guideExpanded, setGuideExpanded] = useState(true);

  return (
    <div className="flex w-full h-full bg-white overflow-hidden rounded-2xl">
      {/* Sidebar */}
      <div className="w-60 h-full bg-white flex flex-col justify-between shrink-0 shadow-[inset_-0.5px_0px_0px_0px_rgba(108,113,140,0.28)]">
        <div>
          {/* Team selector */}
          <Flex alignItems="center" gap="SM" className="px-3 py-2.5">
            <InitialsFigure
              initials="SL"
              color="success"
              size="MD"
              mode="dark"
              shape="squared"
            />
            <div className="flex-1 min-w-0">
              <Text className="font-semibold truncate">Acme Corp.</Text>
              <Text color="default.main.secondary" className="text-sm">Admin</Text>
            </div>
            <Icon name="arrow-left-right" size="24px" color="#535A74" />
          </Flex>

          {/* Main nav */}
          <div>
            {NAV_ITEMS.map((item) => (
              <SidebarNavItem key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div>
          {/* Bottom nav */}
          <div className="shadow-[inset_0px_0.5px_0px_0px_rgba(108,113,140,0.28)]">
            {BOTTOM_NAV_ITEMS.map((item) => (
              <SidebarNavItem key={item.label} {...item} />
            ))}
          </div>

          {/* Footer */}
          <Flex alignItems="center" justifyContent="space-between" className="h-16 px-4">
            <Icon name="maze-logo" size="24px" color="#535A74" />
            <ActionButton emphasis="tertiary" size="SM" iconOnly aria-label="Collapse sidebar">
              <Icon name="collapse" size="16px" />
            </ActionButton>
          </Flex>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Top bar */}
        <Flex
          alignItems="center"
          justifyContent="flex-end"
          className="h-16 px-4 shrink-0 shadow-[inset_0px_-0.5px_0px_0px_rgba(108,113,140,0.28)]"
        >
          <Flex alignItems="center" gap="MD">
            <FigureStack size="MD">
              <InitialsFigure initials="DS" color="rose" size="MD" mode="dark" shape="rounded" />
              <InitialsFigure initials="SL" color="lavender" size="MD" mode="dark" shape="rounded" />
              <InitialsFigure initials="+1" color="dormant" size="MD" mode="dark" shape="rounded" />
            </FigureStack>
            <ActionButton emphasis="tertiary" size="SM">
              <Icon name="plus" size="16px" />
              Add team members
            </ActionButton>
          </Flex>
        </Flex>

        {/* Content with banner */}
        <div className="flex-1 overflow-y-auto relative">
          {/* Purple banner */}
          <div className="h-[200px] bg-[#C095F9] relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'radial-gradient(circle at 30% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.2) 0%, transparent 40%)',
            }} />
          </div>

          {/* Main content */}
          <div className="max-w-[1072px] mx-auto px-8 -mt-[140px] relative z-10 pb-8">
            <Heading level={1} className="text-white mb-12">Welcome, Walt</Heading>

            <div className="bg-white rounded-lg p-8 flex flex-col gap-8">
              {/* Always On placeholder */}
              <div className="bg-[#F8F8FB] rounded-lg h-[363px] flex items-center justify-center">
                <Text color="default.main.secondary" className="text-lg italic">
                  Always On Section
                </Text>
              </div>

              {/* Maze templates */}
              <div className="flex flex-col gap-4">
                <div>
                  <Heading level={3}>Maze templates</Heading>
                  <Text color="default.main.secondary">
                    Choose from our pre-built templates and make it your own
                  </Text>
                </div>
                <Flex gap="LG">
                  {TEMPLATE_IMAGES.map((tmpl, i) => (
                    <TemplateCard key={i} {...tmpl} />
                  ))}
                </Flex>
              </div>

              {/* Explore Maze */}
              <div className="flex flex-col gap-4">
                <Heading level={2} className="text-xl">Explore Maze</Heading>
                <Flex gap="MD">
                  <ExploreCard
                    icon="tester-cards"
                    iconColor="awake"
                    title="Explore panel demo"
                    description="Global pool of 121,000+ participants for quality, targeted responses."
                  />
                  <ExploreCard
                    icon="summary"
                    iconColor="success"
                    title="Explore sample reports"
                    description="Simplify your reporting with automated analytics."
                  />
                  <Box
                    className="flex-1 min-w-0 rounded-lg p-6 flex flex-col gap-1"
                    style={{ backgroundColor: '#F8F8FB' }}
                  >
                    {RESOURCE_LINKS.map((link, i) => (
                      <ResourceItem
                        key={link.title}
                        {...link}
                        isLast={i === RESOURCE_LINKS.length - 1}
                      />
                    ))}
                  </Box>
                </Flex>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome guide - floating */}
        <div className="absolute bottom-16 right-4 z-50">
          <WelcomeGuide
            isExpanded={guideExpanded}
            onToggle={() => setGuideExpanded(!guideExpanded)}
          />
        </div>
      </div>
    </div>
  );
}

TouchpointV1.Title = 'Touchpoint v1';
TouchpointV1.Description = 'Maze homepage with Always On touchpoint';
TouchpointV1.Order = 1;
TouchpointV1.Group = 'Always On';

export default TouchpointV1;
