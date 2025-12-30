import { Card, CardContent } from '@/components/ui/card';
import { StatItem } from '@/lib/stat-types';

type StatsCardsProps<T> = {
	data: T;
	items: StatItem<T>[];
};

export function StatsCards<T>({ data, items }: StatsCardsProps<T>) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{items.map((item) => (
				<Card key={item.label}>
					<CardContent className="p-4">
						<p className="text-sm text-muted-foreground">
							{item.label}
						</p>
						<p className="text-xl font-bold">{item.value(data)}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
