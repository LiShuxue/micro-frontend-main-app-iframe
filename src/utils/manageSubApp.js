import $ from 'jquery';
import subAppConfig from '@/sub-app-config'

const showSubApp = (domID) => {
  if(!domID) {
    return;
  }
  let subAppList = subAppConfig.subAppList;
  subAppList.forEach(item => {
    if ($(`#${item.id}`).hasClass('show')){
      $(`#${item.id}`).removeClass('show');
    }
  });
  $(`#${domID}`).addClass('show');
}

const hideAllSubApp = () => {
  let subAppList = subAppConfig.subAppList;
  subAppList.forEach(item => {
    if ($(`#${item.id}`).hasClass('show')){
      $(`#${item.id}`).removeClass('show');
    }
  });
}

export default {
  showSubApp,
  hideAllSubApp
}