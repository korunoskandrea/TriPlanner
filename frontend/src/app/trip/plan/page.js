'use client';

import {PlanPage} from "@/app/trip/plan/components/PlanPage.component";
import React, {useLayoutEffect} from "react";
import {isAuthenticated} from "@/app/utils/auth";
import {redirect} from "next/navigation";
import Navbar from "@/app/common/components/Navbar.component";

export default function PlanTrip() {
    useLayoutEffect(() => {
        const isAuth =  isAuthenticated() ;
        if (!isAuth) {
            redirect("/");
        }
    }, []);

  return (
      <>
          <Navbar/>
          <PlanPage/>
      </>
  );
}