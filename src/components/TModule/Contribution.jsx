import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { addRecordsContribution } from "./API_Routes";

export default function Contribution() {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    T_ID:null,
    Username:currentUser?.Email,
    Department: "",
    Academic_Year: "",
    Faculty_Name: "",
    Role: "",
    University_Institution: "",
    Body_Name: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(addRecordsContribution, formData);
    console.log("Response is : ", response.data);
  };

  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        className="border border-gray-300 w-85 mx-auto p-2 my-2 rounded-md"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="mx-auto underline underline-offset-2"
        >
          Contribution to BoS
        </Typography>

        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Department
              </Typography>
              <Input
                size="lg"
                name="Department"
                value={formData.Department}
                label="Department"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Academic Year
              </Typography>
              <Input
                size="lg"
                name="Academic_Year"
                value={formData.Academic_Year}
                label="Academic Year"
                onChange={handleOnChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Name of teacher participated
              </Typography>
              <Input
                size="lg"
                name="Faculty_Name"
                value={formData.Faculty_Name}
                label="Name of teacher participated"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Role
              </Typography>
              <Input
                size="lg"
                name="Role"
                value={formData.Role}
                label="Role"
                onChange={handleOnChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                University/Institution
              </Typography>
              <Input
                size="lg"
                name="University_Institution"
                value={formData.University_Institution}
                label="University/Institution"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Name of the body in which full-time teacher participated
            </Typography>
            <Input
              size="lg"
              name="Body_Name"
              value={formData.Body_Name}
              label="Name of the body"
              onChange={handleOnChange}
            />
          </div>

          <Button type="submit" className="mt-4" fullWidth>
            Add Changes
          </Button>
        </form>
      </Card>
    </>
  );
}
