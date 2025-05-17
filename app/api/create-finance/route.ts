import { Finance } from '@/interfaces/Finance';
import { getUser } from '@/utils/supabase/auth/server';
import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
    
    const supabase = await createClient();
    const user = await getUser();

    if (!user?.id) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { payment_name, price, payment_day, info } = body;

    const newPayment: Finance = {
        id: uuidv4(),
        user_id: user.id,
        payment_name,
        price,
        payment_day,
        info,
    };

    const { data, error } = await supabase
    .from('payment_subscription')
    .insert(newPayment)
    .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data[0]); 
}