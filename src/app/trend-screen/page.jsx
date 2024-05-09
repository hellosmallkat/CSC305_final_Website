import CategoryTotalsList from '../../components/ui/CategoryTotalsList';
import { getUser } from "../../utils/CloudFunctions";
export default async function TrendScreen({ searchParams }) {
    const uid = searchParams.uid;
    const user = await getUser(uid);
    return (
        <div className="flex justify-center">
            <div>
              <CategoryTotalsList user={user}/>
            </div>
        </div>
    )
}