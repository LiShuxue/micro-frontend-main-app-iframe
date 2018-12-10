import $ from 'jquery';
import subAppConfig from '@/sub-app-config'

const showSubApp = (domID) => {
  if(!domID) {
    return;
  }
  if(!$(`#${domID}`).hasClass('show')){
    $(`#${domID}`).addClass('show');
  }
}

const hideSubApp = (domID) => {
  if(!domID) {
    return;
  }
  if($(`#${domID}`).hasClass('show')){
    $(`#${domID}`).removeClass('show');
  }
}

const hideAllSubApp = () => {
  let subAppList = subAppConfig.subAppList;
  if(subAppList.length === 0) {
    return;
  }
  subAppList.forEach(item => {
    if ($(`#${item.id}`).hasClass('show')){
      $(`#${item.id}`).removeClass('show');
    }
  });
}

export default {
  showSubApp,
  hideSubApp,
  hideAllSubApp
}