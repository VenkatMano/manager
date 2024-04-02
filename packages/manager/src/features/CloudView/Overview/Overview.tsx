import * as React from 'react';

import { Paper } from 'src/components/Paper';
import { CloudPulseDashboard, DashboardProperties } from '../Dashboard/Dashboard';
import { GlobalFiltersObject } from '../Models/GlobalFilterProperties';
import { GlobalFilters } from './GlobalFilters';
import { Divider } from 'src/components/Divider';

export const Overview = React.memo(() => {


  const [dashboardProp, setDashboardProp] = React.useState<DashboardProperties>({} as DashboardProperties);



  const handleGlobalFilterChange = (globalFilter: GlobalFiltersObject) => {
    //set as dashboard filter    
    setDashboardProp({ ...dashboardProp, dashboardFilters: globalFilter })
  }



  return (
    <Paper>  
      <div style={{"display":"flex"}}>
                <div style={{width:"40%", marginTop:"30px"}}>
                    <h3 >{"Akamai Cloud Pulse Dashboard"}</h3>
                </div>    
                <div style={{width:"80%"}}>
                <GlobalFilters handleAnyFilterChange={(filters:GlobalFiltersObject) => 
                handleGlobalFilterChange(filters)}></GlobalFilters>   
                </div>
      </div>
        <Divider></Divider> 
      <CloudPulseDashboard {...dashboardProp}/>      
    </Paper>
  );
});
