import { Routes, Route } from 'react-router-dom';
import Overview from '../../pages/dashboard/overview/Overview';
import Account from '../../pages/dashboard/account/Account';
import DashboardParty from '../../pages/dashboard/party/DashboardParty';
import SingleOrder from '../../pages/dashboard/singleOrder/SingleOrder';
import History from '../../pages/dashboard/history/History';

const Layout = () => {
  return (
    <div>
        <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/account" element={<Account />} />
            <Route path="/party" element={<DashboardParty />} />
            <Route path="/single-plan" element={<SingleOrder />} />
            <Route path="/history" element={<History />} />
        </Routes>
    </div>
  )
};

export default Layout;