import { action, computed, observable } from 'mobx';
import { apiService } from '../services/api.service';

class AppStore {

  constructor () {

  }

  // ########################################## ACTIONS START ##########################################
  @action
  updateDummyVal (val) {
    this.dummyVal = val;
  }
  // ########################################### ACTIONS END ###########################################

  // ######################################### COMPUTEDS START #########################################
  // ########################################## COMPUTEDS END ##########################################

  // ######################################## OBSERVABLES START ########################################
  @observable
  dummyVal = '';
  // ######################################### OBSERVABLES END #########################################

}

export const appStore = new AppStore();
