import AddElementContainer from "@/common/add-element-container";
import { DashboardHeadingCommon } from "@/common/dashboard-heading-common";
import { HeaderComponent } from "@/common/header-component";
import ImageWithTitleAndText from "@/common/image-with-title-and-text";
import { BasicLayout } from "@/layout/basic-layout";
import React, { useRef, useState } from "react";
// import phone_image from "../assets/phone_new.png";
// import phone_image2 from "../assets/phone_new2.png";
import upload_img from '../assets/upload_img.png';
import { Banner_image_json_data } from "@/json/Banner-image-json";

export default function Banner() {
  const [bannerImageData, setBannerImageData] = useState(Banner_image_json_data)
  const inputRef = useRef();
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const handleSideBarSlider = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    return null;
  };

  // handle the delete function
  const handleDeleteImage = (idx:number) => {
    const filterData = bannerImageData.filter((data:any)=>{
      return data?.id !== idx;``
    })
    setBannerImageData(filterData)
  }

  const handleAddImageBanner = () => {
    inputRef?.current?.click();
    setDisableButton(true)
  }

  const handleFileChangeBanner = (e:any) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    if(imageUrl){
      setBannerImageData((prevData)=>{
      return [...prevData, { id: prevData.length + 1, imageUrl: imageUrl }];
      })
      setDisableButton(false);
    }
  } 
  return (
    <>
      <BasicLayout>
        <div className="w-full font-poppin">
          <HeaderComponent />
        </div>
        <div>
          <DashboardHeadingCommon
            headingState="Banner"
            clickAddtoProduct={(e) => handleSideBarSlider(e)}
          />
        </div>
        <div className="banner_container">
          <AddElementContainer hideAddBtn={false} heading="Current Banner">
            {
              bannerImageData.length > 0 && bannerImageData.map((data:any, i:number)=>{
                return <>
                    <div key={i} className="w-4/12">
                      <ImageWithTitleAndText
                      imgUrl={data?.imageUrl}
                      idx={data?.id} 
                      handleDeleteImage={handleDeleteImage} />
                    </div>
                </>
              })
            }
          </AddElementContainer>
        </div>
        <div className="banner_container">
          <AddElementContainer hideAddBtn={true} heading="Upload New One">
            <div className="h-[14rem] w-full border-[2px] border-dashed border-gray-300 rounded-xl bg-gray-100">
              <div className="h-full w-full flex items-center justify-center flex-col gap-y-4">
                  <div>
                    <img src={upload_img} className="h-fit w-fit"  alt="upload image" loading="lazy" />
                  </div>
                  <p className="text-gray-400 text-sm font-poppin">Drag and drop image here, or click add image</p>
                  <button disabled={disableButton} onClick={handleAddImageBanner} className="bg-violet-200 px-5 py-2 rounded-xl text-blue-600 text-sm font-[600] font-poppin hover:bg-blue-600 hover:text-white cursor-pointer " >{"Add Image"}</button>
                  <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChangeBanner} className="hidden"  />
              </div>  
            </div>
          </AddElementContainer>
        </div>
        
      </BasicLayout>
    </>
  );
}
    