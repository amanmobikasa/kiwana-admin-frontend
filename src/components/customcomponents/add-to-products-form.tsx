import { Text } from "@radix-ui/themes";
import { Input } from "../ui/input";
import { FormWrapper } from "./form-wrapper";
import { useState } from "react";
import { ButtonCommon } from "./button-common";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/product-CRUD";
import { useToast } from "../ui/use-toast";
import phone_img from "../../assets/phone.png";

interface AddtoProductsFormProps {
  children?: React.ReactNode | React.ReactNode[];
  formJson?: object[] | object;
  valueJsonData?: object | object[];
}

export const AddtoProductsForm = ({
  children,
  formJson,
  valueJsonData,
}: AddtoProductsFormProps) => {
  const [errorState, setErrorState] = useState<Array<any>>([]);
  const [formJsonState, setFormJsonState] = useState<any>(formJson);
  const [addToProductState, setAddtoProductState] = useState<any>({});
  const [updatedProductJson, setUpdatedProductJson] = useState<any>(valueJsonData);
  const dispatch = useDispatch();
  const { toast } = useToast();

  // console.log("formJsonState", formJsonState)

  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>, data: any) => {
    if(updatedProductJson?.id){
      setAddtoProductState({
        ...updatedProductJson,
        [data?.name]:
          name === "product_name"
            ? [{ value, image: phone_img, quantity: 3 }]
            : value,
      });

    }
    setAddtoProductState({
      ...addToProductState,
      [data?.name]:
        name === "product_name"
          ? [{ value, image: phone_img, quantity: 3 }]
          : value,
    });
  }
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (addToProductState?.producd_name !== "") {
      dispatch(addProduct(addToProductState)); // setting the data in redux
    }
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  };

  return (
    <>
      <FormWrapper onSubmit={handleFormSubmit}>
        {formJsonState?.map((data: any, index: number) => {
          return (
            <>
              <div key={index} className="space-y-2 mb-3">
                <label className="block text-sm font-medium text-text-primary-gray">
                  {data?.label}
                </label>
                <Input
                  onChange={(e) => handleChange(e, data)}
                  type={data?.type}
                  name={data?.name}
                  value={updatedProductJson?.[data?.name] || addToProductState?.producd_name}
                  placeholder={data?.label + " here..."}
                  className="w-full rounded-xl border-gray-500 bg-indigo-100 placeholder:text-gray-600 placeholder:text-xs"
                />
                {errorState.length > 0 && (
                  <Text as="span" className="text-red-500">
                    Error raise
                  </Text>
                )}
              </div>
            </>
          );
        })}
        <div className="w-full flex gap-x-5 mt-[3rem]">
          <ButtonCommon
            type="submit"
            className="bg-indigo-500 text-white hover:text-white space-x-2 hover:bg-indigo-600 rounded-xl px-4"
          >
            <span>Submit</span>
          </ButtonCommon>
          <ButtonCommon className="bg-red-500 text-white hover:text-white space-x-2 hover:bg-red-600 rounded-xl px-4">
            <span>Cancel</span>
          </ButtonCommon>
        </div>
      </FormWrapper>
    </>
  );
};
