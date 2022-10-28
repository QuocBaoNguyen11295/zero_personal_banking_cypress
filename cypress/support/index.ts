// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './AppActions/loginAppActions'
import './AppActions/app'
import './AppActions/feedbackAppActions'
import './AppActions/onlineBankingAppActions'
import './AppActions/accountSummaryAppActions'
import './AppActions/accountActivityAppActions'
import 'cypress-plugin-tab'
import 'cypress-slow-down/commands'
import './AppActions/transferFundAppActions'
import './AppActions/payBillsAppActions'
import './AppActions/paySavedPayeeAppActions'
import { slowCypressDown } from 'cypress-slow-down'
// Alternatively you can use CommonJS syntax:
// require('./commands')
