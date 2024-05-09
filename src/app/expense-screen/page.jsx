import { getUser } from "../../utils/CloudFunctions";
import ExpensesList from "../../components/ui/ExpensesList";
export const dynamic = 'force-dynamic';
export default async function ExpenseScreen({ searchParams }) {
    const uid = searchParams.uid;
    const user = await getUser(uid);

    return (
        <div className="pl-8 pr-16">
            <div>
                <ExpensesList user={user} />
            </div>
        </div>
    )
}