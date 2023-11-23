import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bank_Offer from '../component/Bank_Offer'
import Footer from '../component/Fotter'
import Slider from '../component/Slider';
import Cleaning_Slid from '../component/Cleaning_Slid'
import Snacks from '../component/Snacks_map'
import Beauty_Hygiene from '../component/Beauty_Hygiene'
import Home_Kitchen from '../component/Home_Kitchen'
import Brand_store from '../component/Brand_store'
import NavBar from '../component/NavBar'
import Product from '../component/Product';
import Contuct_us from '../component/Contuct_us';
import Product_dis from '../component/Product_dis';
// import Veg_card from '../component/Veg_card';
import Veg_map from '../component/Veg_map';
import Fruits_Veg_map from '../component/Fruits_Veg_map';
import Daily_Staples_map from '../component/Daily_Staples_map';
import Beverages_map from '../component/Beverages_map';

function HomePage() {


    return (
        <>


            <NavBar />

            {/* <Product_dis /> */}


            <Slider />
            <div>

                <Bank_Offer />
                <Product />
                <Veg_map />
                <Fruits_Veg_map />
                {/* <Fruits_Vegetables /> */}
                {/* <Vegetable_Slider /> */}
                <Daily_Staples_map />
                <Beverages_map />
                <Snacks />
                <Slider />
                <Cleaning_Slid />
                <Beauty_Hygiene />
                <Home_Kitchen />

                {/* <Slider />
            <Bank_Offer />
            <Fruits_Vegetables />
            <Vegetable_Slider />
            <Daily_Staples />
            <Beverages />
            <Snacks />
            <Slider />
            <Cleaning_Slid />
            <Beauty_Hygiene />
            <Home_Kitchen />

            <Slider />
            <Bank_Offer />
            <Fruits_Vegetables />
            <Vegetable_Slider />
            <Daily_Staples />
            <Beverages />
            <Snacks />
            <Slider />
            <Cleaning_Slid />
            <Beauty_Hygiene />
            <Home_Kitchen />
            <Fruits_Vegetables />
            <Vegetable_Slider />
            <Daily_Staples /> */}

                <Brand_store />
                <Contuct_us />
            </div>

            <br></br>
            <br></br>

            <Footer />





        </>
    );
}

export default HomePage;
