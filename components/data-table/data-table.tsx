'use client';

import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	ColumnDef,
} from '@tanstack/react-table';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export function DataTable<T>({
	columns,
	data,
}: {
	columns: ColumnDef<T>[];
	data: T[];
}) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="border rounded-lg">
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((hg) => (
						<TableRow key={hg.id}>
							{hg.headers.map((h) => (
								<TableHead key={h.id}>
									{flexRender(
										h.column.columnDef.header,
										h.getContext(),
									)}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
