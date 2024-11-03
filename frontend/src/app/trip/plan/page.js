'use client';

import {PlanPage} from "@/app/trip/plan/components/PlanPage.component";
import {useLayoutEffect} from "react";
import {isAuthenticated} from "@/app/utils/auth";
import {redirect} from "next/navigation";

export default function PlanTrip() {

    useLayoutEffect(() => {
        const isAuth = typeof isAuthenticated === 'function' ? isAuthenticated() : isAuthenticated;
        if (!isAuth) {
            redirect("/");
        }
    }, []);

  return (
      <>
             <PlanPage/>
      </>
  );
}