export type StatItem<T> = {
	label: string;
	value: (data: T) => string | number;
};

export type CampaignInsights = {
	campaign_id: string;
	timestamp: string;
	impressions: number;
	clicks: number;
	conversions: number;
	spend: number;
	ctr: number;
	cpc: number;
	conversion_rate: number;
};
