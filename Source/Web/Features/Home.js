/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { inject } from 'aurelia-dependency-injection';

import { CommandCoordinator } from '@dolittle/commands';
import { QueryCoordinator } from '@dolittle/queries';

@inject(CommandCoordinator, QueryCoordinator)
export class Home {
    
    constructor(commandCoordinator, queryCoordinator) {

        this._commandCoordinator = commandCoordinator;
        this._queryCoordinator = queryCoordinator;
    }
}
