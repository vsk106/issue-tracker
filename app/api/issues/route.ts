
import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '../../../prisma/client';

const createIssueSchema = z.object({
	title: z.string().max(255),
	description: z.string(),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const validation = createIssueSchema.safeParse(body);
		if (!validation.success) {
			return NextResponse.json({ error: 'Invalid request', details: validation.error.errors }, { status: 400 });
		}

	// Create the issue in the database using Prisma Client
		const issue = await prisma.issue.create({
			data: {
				title: validation.data.title,
				description: validation.data.description,
			},
		});
		return NextResponse.json({ message: 'Issue created', data: issue }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: 'Server error' }, { status: 500 });
	}
}
