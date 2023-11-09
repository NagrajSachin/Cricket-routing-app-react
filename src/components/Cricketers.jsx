import { Outlet } from 'react-router-dom';

const Cricketers = () => (
    <div style={{ padding: '30px', maxwidth: 'fitContent' }}>
        {/* An outlet should be used in parent route elements to render their child route elements
        this allows nested UI to show up when child routes are rendered, If the parent route matched exactly */}
        <Outlet />
    </div>
);

export default Cricketers;