"use client"


import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";



const Page = () => {
    const [selected, setSelected] = React.useState("login");
    return (
        <div className="flex flex-col w-full mt-20">
      <Card className="max-w-full w-[340px] h-[400px] border-4 mx-auto">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form 
              action={async(formData:FormData)=>{
              
                const name = formData.get("name") as string | undefined
                const email = formData.get("email") as string | undefined
                const password = formData.get("password") as string | undefined
              }}
              className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="password" name="name" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" name="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
    );
};

export default Page;