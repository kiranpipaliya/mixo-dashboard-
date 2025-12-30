'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Campaign } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const columns: ColumnDef<Campaign>[] = [
	{
		accessorKey: 'name',
		header: 'Campaign',
		cell: ({ row }) => (
			<Link
				href={`/dashboard/${row.original.id}`}
				className="font-medium underline underline-offset-4"
			>
				{row.original.name}
			</Link>
		),
	},

	{
		accessorKey: 'platforms',
		header: 'Platforms',
		cell: ({ row }) => (
			<div className="flex gap-1">
				{row.original.platforms.map((platform) => (
					<Badge key={platform} variant="outline">
						{platform.toUpperCase()}
					</Badge>
				))}
			</div>
		),
	},

	{
		accessorKey: 'budget',
		header: 'Budget',
		cell: ({ row }) => (
			<span className="font-medium">
				${row.original.budget.toLocaleString()}
			</span>
		),
	},

	{
		accessorKey: 'daily_budget',
		header: 'Daily Budget',
		cell: ({ row }) => (
			<span>${row.original.daily_budget.toLocaleString()}</span>
		),
	},

	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const status = row.original.status;

			return (
				<Badge
					variant={
						status === 'active'
							? 'default'
							: status === 'paused'
							? 'secondary'
							: 'outline'
					}
				>
					{status}
				</Badge>
			);
		},
	},

	{
		accessorKey: 'created_at',
		header: 'Created',
		cell: ({ row }) => (
			<span className="text-muted-foreground">
				{new Date(row.original.created_at).toLocaleDateString()}
			</span>
		),
	},
];
