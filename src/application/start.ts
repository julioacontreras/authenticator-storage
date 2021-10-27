
import {Application} from './application';

import {register as registerMetric} from '../adapters/registers/metrics';
import {register as registerSecurityAccess} from '../adapters/registers/securityAccess';
import {register as registerValidate} from '../adapters/registers/validate';
import {register as registerServer} from '../adapters/registers/serverHTTP';
// import {register as registerServer} from '../adapters/registers/serverGRPC';
import {register as registerDatabase} from '../adapters/registers/dbMongo';
import {register as registerUserRepository} from '../adapters/registers/userRepository';
import {register as registerCreateUser} from './usecases/registerCreateUser';
import {register as registerDeleteUser} from './usecases/registerDeleteUser';

export const start = async () => {
  let app = new Application();
  app = await registerMetric(app);

  const metric = app.getMetric()
  metric.createHistogram(
    'http_request_duration_seconds',
    'Duration of HTTP requests in microseconds',
    ['method', 'route', 'code'],
    [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
  );
  metric.histogramObserver('http_request_duration_seconds', 0.45)
  // metric.createGauge('app-start', 'applicaiton start')
  // const end = metric.startGauge('app-start')

  app = registerSecurityAccess(app);
  app = registerValidate(app);
  app = await registerDatabase(app);
  app = registerUserRepository(app);
  app = registerCreateUser(app);
  app = registerDeleteUser(app);
  registerServer(app);
  // metric.endGauge(end)
};
