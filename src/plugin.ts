import {createApiFactory, createPlugin} from '@backstage/core';
import { costInsightsApiRef } from '@backstage/plugin-cost-insights';
import {CostInsightsClient} from "./api";

export const costInsightsBackendPlugin = createPlugin({
    id: 'cost-insights-backend-plugin',
    apis: [
        createApiFactory(costInsightsApiRef, new CostInsightsClient()),
    ],
});

