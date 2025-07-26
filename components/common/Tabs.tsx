import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReviewSection from "../property/ReviewSection";
import { REVIEWS } from "@/constants";

// --- FIX START ---
// Assign the arrow function to a named constant
const PropertyTabsComponent = () => (
  <Tabs>
    <div className="flex justify-between items-center border-t-1 border-b-1 border-gray-200 pt-8 w-full">
      <TabList className="border-0 text-gray-400 text-[12.75px] lg:text-[15px]">
        <Tab>Description</Tab>
        <Tab>What we offer</Tab>
        <Tab>Reviews</Tab>
        <Tab>About Host</Tab>
      </TabList>
      <div className="hidden md:hidden lg:block">
        <p className="text-gray-400 md:text-[14px]">Publish July 01, 2024</p>
      </div>
    </div>

    <TabPanel className="my-10">
      <p className="text-[17px]/7">
        Feel like exploring the Dominican? Start the day with a hike on one of
        Playa Moron&apos;s many trails. Weave your way around the gated
        community to find secluded sandy coves for swimming and paddleboarding.
        When you&apos;re ready to chill with friends, the beach house pool
        awaits. Spend the night entertaining in the outdoor lounge, sipping
        drinks in the hot tub, and gazing out over incredible ocean views.
      </p>

      <div className="font-semibold text-lg text-gray-800 mt-8">The space</div>
      <div className="font-medium text-base text-gray-800">
        BEDROOM & BATHROOM
      </div>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone
          rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck,
          Balcony, Ocean view
        </li>
      </ul>
      <button className="text-blue-600 hover:underline font-medium mt-4">
        Read more &rarr;
      </button>
    </TabPanel>
    <TabPanel>
      <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
      <p>
        This property provides a range of amenities including a private pool,
        high-speed internet, fully equipped kitchen, and breathtaking ocean
        views. Enjoy direct beach access and a serene environment perfect for
        relaxation.
      </p>
    </TabPanel>
    <TabPanel>
      <ReviewSection reviews={REVIEWS} />
    </TabPanel>
    <TabPanel>
      <h3 className="text-xl font-semibold mb-3">About Your Host</h3>
      <p>
        Your host is dedicated to ensuring you have a comfortable and memorable stay.
        They are available to assist with any questions or needs you may have during your visit.
      </p>
    </TabPanel>
  </Tabs>
);

export default PropertyTabsComponent;