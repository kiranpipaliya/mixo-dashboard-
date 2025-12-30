export async function api<T>(path: string): Promise<T | null> {
	try {
		const res = await fetch(
			`https://mixo-fe-backend-task.vercel.app${path}`,
			{ cache: 'no-store' },
		);

		if (!res.ok) {
			console.error('API failed:', path, res.status);
			return null;
		}

		return res.json();
	} catch (error) {
		console.error('API error:', path, error);
		return null;
	}
}
