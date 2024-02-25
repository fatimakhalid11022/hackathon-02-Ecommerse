import Image from "next/image";

import FrontPage from "@/componentsbyme/FrontPage";
import Promotions from "@/componentsbyme/Promotions";
import WhatweHave from "@/componentsbyme/WhatweHave";
import Quality from "@/componentsbyme/Quality";
import Signin from "@/componentsbyme/Signin";

export default function Home() {
  return (
   <div >
  
    <FrontPage/>
    <Promotions/>
    
   <WhatweHave/>
      <Quality/> 
      <Signin/>
   </div>

  );
}
