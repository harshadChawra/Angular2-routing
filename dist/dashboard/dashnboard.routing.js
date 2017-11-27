"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
exports.dashboardRoutes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'users',
                component: DashboardUsersComponent,
                children: [
                    {
                        path: '',
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(exports.dashboardRoutes);
//# sourceMappingURL=dashnboard.routing.js.map