import { api } from '@/lib/api';
import { Campaign, CampaignInsightsResponse } from '@/lib/types';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { campaignStats } from '@/components/dashboard/stat-configs';
import { CampaignLiveStats } from '@/components/dashboard/campaign-live-stats';

type CampaignType = {
	campaign: Campaign;
};

export default async function CampaignPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const campaign = await api<CampaignType>(`/campaigns/${id}`);
	console.log('campaign', campaign);
	const insightsRes = await api<CampaignInsightsResponse>(
		`/campaigns/${id}/insights`,
	);

	if (!campaign) {
		return (
			<div className="p-8">
				<h1 className="text-xl font-semibold">Campaign not found</h1>
				<p className="text-muted-foreground">
					This campaign may have been deleted or is temporarily
					unavailable.
				</p>
			</div>
		);
	}

	const insights = insightsRes?.insights ?? null;

	return (
		<div className="p-8 space-y-6">
			<h1 className="text-2xl font-bold">
				{campaign.campaign.name} Static Data
			</h1>

			{insights ? (
				<StatsCards data={insights} items={campaignStats} />
			) : (
				<p className="text-muted-foreground">
					Campaign insights are currently unavailable.
				</p>
			)}

			<h2 className="text-2xl font-bold mt-6">
				{campaign.campaign.name} Real-time Updates
			</h2>

			{insights && (
				<CampaignLiveStats campaignId={id} initialData={insights} />
			)}
		</div>
	);
}
