import { FinanceInfo } from '@/interfaces/Finance';
import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
    const supabase = await createClient();

    // Extract `id` from the request URL
    const financeId = req.nextUrl.pathname.split('/').pop();

    if (!financeId) {
        return NextResponse.json({ error: 'Missing user ID in request' }, { status: 400 });
    }

    const body = await req.json();
    const { payment_name, price, payment_day, info } = body;

    const newPayment: FinanceInfo = {
        payment_name,
        price,
        payment_day,
        info,
    };

    const { data, error } = await supabase
    .from('payment_subscription')
    .update(newPayment)
    .eq('id', financeId)
    .select();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}
