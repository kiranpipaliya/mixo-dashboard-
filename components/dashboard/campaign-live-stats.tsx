'use client';

import { useEffect, useState } from 'react';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { campaignStats } from '@/components/dashboard/stat-configs';
import { CampaignInsights } from '@/lib/types';

type Props = {
	campaignId: string;
	initialData: CampaignInsights;
};

export function CampaignLiveStats({ campaignId, initialData }: Props) {
	const [data, setData] = useState<CampaignInsights>(initialData);

	useEffect(() => {
		const url = `https://mixo-fe-backend-task.vercel.app/campaigns/${campaignId}/insights/stream`;

		const eventSource = new EventSource(url);

		eventSource.onmessage = (event) => {
			try {
				const parsed = JSON.parse(event.data);
				setData(parsed);
			} catch (err) {
				console.error('SSE parse error', err);
			}
		};

		eventSource.onerror = () => {
			console.error('SSE connection error');
			eventSource.close();
		};

		return () => {
			eventSource.close();
		};
	}, [campaignId]);

	return <StatsCards data={data} items={campaignStats} />;
}
