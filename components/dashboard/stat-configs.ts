import { CampaignInsights, StatItem } from '@/lib/stat-types';
import { DashboardInsights } from '@/lib/types';

export const dashboardStats: StatItem<DashboardInsights>[] = [
	{
		label: 'Total Campaigns',
		value: (d) => d.total_campaigns,
	},
	{
		label: 'Active Campaigns',
		value: (d) => d.active_campaigns,
	},
	{
		label: 'Impressions',
		value: (d) => d.total_impressions.toLocaleString(),
	},
	{
		label: 'Clicks',
		value: (d) => d.total_clicks.toLocaleString(),
	},
	{
		label: 'Conversions',
		value: (d) => d.total_conversions.toLocaleString(),
	},
	{
		label: 'Spend',
		value: (d) => `$${d.total_spend.toLocaleString()}`,
	},
	{
		label: 'Avg CTR',
		value: (d) => `${d.avg_ctr}%`,
	},
	{
		label: 'Avg CPC',
		value: (d) => `$${d.avg_cpc}`,
	},
];

export const campaignStats: StatItem<CampaignInsights>[] = [
	{
		label: 'Impressions',
		value: (d) => d.impressions.toLocaleString(),
	},
	{
		label: 'Clicks',
		value: (d) => d.clicks.toLocaleString(),
	},
	{
		label: 'Conversions',
		value: (d) => d.conversions.toLocaleString(),
	},
	{
		label: 'Spend',
		value: (d) => `$${d.spend.toLocaleString()}`,
	},
	{
		label: 'CTR',
		value: (d) => `${d.ctr}%`,
	},
	{
		label: 'CPC',
		value: (d) => `$${d.cpc}`,
	},
	{
		label: 'Conversion Rate',
		value: (d) => `${d.conversion_rate}%`,
	},
];
