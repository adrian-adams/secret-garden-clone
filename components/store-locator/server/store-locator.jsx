// API
import { fetchHygraph } from '@/api/hygraph';
// Query
import { storeQuery } from '@/gql-queries/stores';

// Components
import Stores from '@/components/store-locator/client/stores'

export default async function StoreLocator() {
    const storeData = await fetchHygraph(storeQuery);
    const dataStores = storeData.stores;
    return (
        <div>
            <Stores stores={dataStores} />
        </div>
    )
}
