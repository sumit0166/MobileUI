import "./Dashboard.css";
import RecentComp from "./RecentComp";
import ColItem from "./ColItem";
import {DiscountShape, ShoppingCart, Calendar, ArrowUp2, LocationTick, Heart, UserAdd} from 'iconsax-react';

function Dashboard() {
    
    return(
        <div className="Dashboard">
            <div className="dash-topsec">

            </div>
            
            <div className="colage">
                <ColItem value='12.0000' percent="11%" rotate='30deg' Icon={LocationTick} color="#45b500" heading='User Visit' varient="Bold" size="19" />
                <ColItem value='12.0000' percent="11%" rotate='60deg' Icon={UserAdd} color="#f28f3e" heading="New User" Varient="Bulk" size="19" />
                <ColItem value='12.0000' percent="11%" rotate='300deg' Icon={ArrowUp2} color="#a071ff" heading="Click Rate" varient="Bulk" size="34" />
                <ColItem value='12.0000' percent="11%" rotate='120deg' Icon={Heart} color="#3d7cf9" heading="Impression" varient="Bulk" size="19" />
            </div>
            <div className="recent-sec">
                <div className="recent-sec-top">
                    <span>Recent Campaign</span>
                    <span>See All</span>
                </div>
                <div className="recent-sec-bottom">
                    <RecentComp Icon={DiscountShape} color="#ffa500" Head="Discount of New Year" subHead="24 Dec 2022" State='Active' />
                    <RecentComp Icon={ShoppingCart} color="#78AD45" Head="Campaign Promo 12.12" subHead="12 Dec 2022" State='Deactive' />
                    <RecentComp Icon={Calendar} color="#A24B44" Head="Flash Sale" subHead="1 Jan 20223" State='Draft' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;