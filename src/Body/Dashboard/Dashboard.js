import "./Dashboard.css";
import RecentComp from "./RecentComp";
import ColItem from "./ColItem";
import profilePhoto from '../../Profile.jpg';
import {DiscountShape, Calendar2, ShoppingCart, Calendar, ArrowUp2, LocationTick, Heart, UserAdd} from 'iconsax-react';

function Dashboard() {
    // const profilePhoto = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return(
        <div className="Dashboard">
            <div className="dash-topsec">
                <div className="dash-head">
                    <span>Dashboard</span>
                    <div className="profile" style={{background:`url(${profilePhoto})`}}> </div>
                </div>
                <div className="dash-subhead">
                    <span>1 November - 30 November 2022</span>
                    <Calendar2 size="16" variant="Broken"/>
                </div>
            </div>

            <div className="colage">
                <ColItem value='12.0000' delay="0ms" percent="+11%" rotate='30deg' iconColor="red" Icon={LocationTick} color="#45b500" heading='User Visit' varient="Bold" size="19" />
                <ColItem value='12.0000' delay="100ms" percent="+11%" rotate='60deg' iconColor="blue" Icon={UserAdd} color="#f28f3e" heading="New User" varient="Bulk" size="19" />
                <ColItem value='12.0000' delay="200ms" percent="+11%" rotate='300deg' iconColor="#1d005f" Icon={ArrowUp2} color="#a071ff" heading="Click Rate" varient="Bulk" size="34" />
                <ColItem value='12.0000' delay="300ms" percent="+11%" rotate='120deg' iconColor="dodgerblue" Icon={Heart} color="#3d7cf9" heading="Impression" varient="Bulk" size="19" />
            </div>
            <div className="recent-sec">
                <div className="recent-sec-top">
                    <span>Recent Campaign</span>
                    <span>See All</span>
                </div>
                <div className="recent-sec-bottom">
                    <RecentComp delay="0ms" Icon={DiscountShape} color="#ffa500" Head="Discount of New Year" subHead="24 Dec 2022" State='Active' />
                    <RecentComp delay="100ms" Icon={ShoppingCart} color="#78AD45" Head="Campaign Promo 12.12" subHead="12 Dec 2022" State='Deactive' />
                    <RecentComp delay="200ms" Icon={Calendar} color="#A24B44" Head="Flash Sale" subHead="1 Jan 20223" State='Draft' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;