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
  TextBadge,
  Tag,
  Dot,
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

const RESOURCE_LINKS = [
  { title: 'Get Started Guide', description: 'Learn how to build your first maze.' },
  { title: 'Help center', description: 'FAQs, tips, and tricks.' },
  { title: 'Maze university', description: 'Live and on-demand training videos.' },
];

const TEAM_AVATARS = [
  { initials: 'DS', color: 'rose' },
  { initials: 'SL', color: 'lavender' },
  { initials: '+1', color: 'dormant' },
];

const RUNNING_STUDY = {
  name: 'Checkout flow usability test',
  recurrence: 'Weekly',
  newInsights: 2,
};

const SUGGESTED_STUDIES = [
  {
    icon: 'touch',
    iconColor: 'awake',
    title: 'Test your new pricing page',
    description: 'Understand how users react to your updated pricing tiers before launch.',
    reason: 'Q1 goal: Increase conversion',
  },
  {
    icon: 'idea',
    iconColor: 'featured',
    title: 'Validate onboarding changes',
    description: 'Continuously measure whether new users complete setup successfully.',
    reason: 'Q1 goal: Reduce churn',
  },
  {
    icon: 'goal',
    iconColor: 'success',
    title: 'Track NPS after each release',
    description: 'Automatically collect satisfaction scores every time you ship.',
    reason: 'OKR: Improve CSAT to 4.5+',
  },
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

function AvatarStack({ avatars }) {
  return (
    <div className="flex items-center pr-1">
      {avatars.map((avatar, i) => (
        <div
          key={avatar.initials}
          className="relative"
          style={{
            marginLeft: i > 0 ? '-8px' : 0,
            zIndex: i,
          }}
        >
          <InitialsFigure
            initials={avatar.initials}
            color={avatar.color}
            size="MD"
            mode="dark"
            shape="rounded"
          />
        </div>
      ))}
    </div>
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
        <ActionButton emphasis="tertiary" size="SM" iconOnly icon={<Icon name="preview" size="16px" />} aria-label="Open">
          Open
        </ActionButton>
      </Flex>
      {!isLast && <div className="h-px bg-[rgba(108,113,140,0.08)]" />}
    </>
  );
}

function RunningStudyRow({ name, recurrence, newInsights }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-[inset_0px_0px_0px_0.5px_rgba(108,113,140,0.28)] cursor-pointer hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-shadow">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="SM" className="min-w-0 flex-1">
          <IconFigure name="studies" color="featured" size="MDPlus" mode="light" shape="squared" />
          <div className="min-w-0">
            <Text className="font-semibold truncate">{name}</Text>
            <Flex alignItems="center" gap="XS">
              <Text color="default.main.secondary" className="text-sm">AI-moderated</Text>
              <Text color="default.main.secondary" className="text-sm">·</Text>
              <Icon name="refresh" size="14px" color="#535A74" />
              <Text color="default.main.secondary" className="text-sm">{recurrence}</Text>
            </Flex>
          </div>
        </Flex>

        <Flex alignItems="center" gap="LG">
          <TextBadge sentiment="awake">LIVE</TextBadge>

          <IconFigure name="maze-logo" color="primary" size="SM" mode="dark" shape="squared" />

          <Flex alignItems="center" gap="XS">
            <Dot size={8} color="blue500" />
            <Text className="whitespace-nowrap">{newInsights} New insights</Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

function SuggestedStudyCard({ icon, iconColor, title, description, reason }) {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-lg p-4 flex flex-col gap-3 shadow-[inset_0px_0px_0px_0.5px_rgba(108,113,140,0.28)] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-shadow cursor-pointer">
      <Flex alignItems="center" justifyContent="space-between">
        <IconFigure name={icon} color={iconColor} size="SM" mode="light" shape="squared" />
        {reason && (
          <Tag bg="#F9F7FF" color="#6B5BEE" height="18px" lineHeight="18px" fontSize="10px" borderRadius="4px">
            {reason}
          </Tag>
        )}
      </Flex>
      <div className="flex flex-col gap-1">
        <Text className="font-semibold text-sm">{title}</Text>
        <Text type="caption" color="default.main.secondary">{description}</Text>
      </div>
    </div>
  );
}

function TouchpointV1() {
  return (
    <div className="flex w-full h-full bg-white overflow-hidden rounded-2xl">
      {/* Sidebar */}
      <div className="w-60 h-full bg-white flex flex-col justify-between shrink-0 shadow-[inset_-0.5px_0px_0px_0px_rgba(108,113,140,0.28)]">
        <div>
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

          <div>
            {NAV_ITEMS.map((item) => (
              <SidebarNavItem key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div>
          <div className="shadow-[inset_0px_0.5px_0px_0px_rgba(108,113,140,0.28)]">
            {BOTTOM_NAV_ITEMS.map((item) => (
              <SidebarNavItem key={item.label} {...item} />
            ))}
          </div>

          <Flex alignItems="center" justifyContent="space-between" className="h-16 px-4">
            <Icon name="maze-logo" size="24px" color="#535A74" />
            <ActionButton emphasis="tertiary" size="SM" iconOnly icon={<Icon name="collapse" size="16px" />} aria-label="Collapse sidebar">
              Collapse
            </ActionButton>
          </Flex>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <Flex
          alignItems="center"
          justifyContent="flex-end"
          className="h-16 px-4 shrink-0 shadow-[inset_0px_-0.5px_0px_0px_rgba(108,113,140,0.28)]"
        >
          <Flex alignItems="center" gap="MD">
            <AvatarStack avatars={TEAM_AVATARS} />
            <ActionButton emphasis="tertiary" size="SM">
              <Icon name="plus" size="16px" />
              Add team members
            </ActionButton>
          </Flex>
        </Flex>

        {/* Content with banner */}
        <div className="flex-1 overflow-y-auto">
          {/* Purple banner with background image */}
          <div className="h-[264px] bg-[#C095F9] relative overflow-hidden">
            <img
              src="/images/home-cover.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ transform: 'rotate(180deg) scaleY(-1)' }}
            />
          </div>

          {/* Main content */}
          <div className="max-w-[1072px] mx-auto px-8 -mt-[200px] relative z-10 pb-8">
            <Heading level={1} style={{ color: '#FFFFFF' }} className="mb-12">
              Welcome, Walt
            </Heading>

            <div className="bg-white rounded-lg p-8 flex flex-col gap-8">
              {/* Continuous Research */}
              <div className="flex flex-col gap-5">
                <div>
                  <Flex alignItems="center" gap="SM" className="mb-1">
                    <Heading level={3}>Live pulse</Heading>
                    <Tag bg="#F0FAFF" color="#0568FD" height="20px" lineHeight="20px" fontSize="11px" borderRadius="4px">
                      Live
                    </Tag>
                  </Flex>
                  <Text color="default.main.secondary">
                    Continuously running studies
                  </Text>
                </div>

                <RunningStudyRow {...RUNNING_STUDY} />

                <div className="mt-2">
                  <Text type="caption" color="default.main.secondary" className="font-semibold uppercase tracking-wider mb-3">
                    Suggested for your team
                  </Text>
                  <Flex gap="MD">
                    {SUGGESTED_STUDIES.map((study) => (
                      <SuggestedStudyCard key={study.title} {...study} />
                    ))}
                  </Flex>
                </div>
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
      </div>
    </div>
  );
}

TouchpointV1.Title = 'Touchpoint v1';
TouchpointV1.Description = 'Maze homepage with Always On touchpoint';
TouchpointV1.Order = 1;
TouchpointV1.Group = 'Always On';

export default TouchpointV1;
