import { api } from '@/lib/api';
import { CampaignsResponse, DashboardInsightsResponse } from '@/lib/types';
import { DataTable } from '@/components/data-table/data-table';
import { columns } from '@/components/data-table/columns';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { dashboardStats } from '@/components/dashboard/stat-configs';

export default async function DashboardPage() {
	const campaignsRes = await api<CampaignsResponse>('/campaigns');
	const insightsRes = await api<DashboardInsightsResponse>(
		'/campaigns/insights',
	);

	const campaigns = campaignsRes?.campaigns ?? [];
	const insights = insightsRes?.insights ?? null;

	if (!insights) {
		return (
			<div className="p-8 space-y-4">
				<h1 className="text-2xl font-bold">Campaign Dashboard</h1>

				<p className="text-muted-foreground">
					Dashboard data is temporarily unavailable. Please refresh
					the page.
				</p>

				{campaigns.length > 0 && (
					<DataTable columns={columns} data={campaigns} />
				)}
			</div>
		);
	}

	return (
		<div className="p-8 space-y-6">
			<h1 className="text-2xl font-bold">Campaign Dashboard</h1>

			<StatsCards data={insights} items={dashboardStats} />

			<DataTable columns={columns} data={campaigns} />
		</div>
	);
}
