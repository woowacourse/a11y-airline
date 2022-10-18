const findActiveTabItemId = $tabContainer => {
  const $activeTab = $tabContainer.querySelector(`.tab-item.active`);
  if (!$activeTab) return null;
  const tabId = $activeTab.getAttribute('data-tabId');
  return tabId;
};

const activate = ($tabContainer, $tabItem) => {
  $tabItem.classList.add('active');
  const tabItemId = $tabItem.getAttribute('data-tabId');
  console.log('tabItemId', tabItemId);
  const $tabPanel = $tabContainer.querySelector(`#${tabItemId}`);
  console.dir($tabPanel);
  $tabPanel.classList.add('active');
};

const reset = $tabContainer => {
  const $tabItems = $tabContainer.querySelectorAll('.tab-item');
  $tabItems.forEach($tabItem => {
    $tabItem.classList.remove('active');
  });
  const $tabPanels = $tabContainer.querySelectorAll('.panel');
  $tabPanels.forEach($panel => {
    $panel.classList.remove('active');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const $tabContainer = document.querySelector('.tab-container');
  const $activeTabItem = $tabContainer.querySelector('.tab-item.active');
  activate($tabContainer, $activeTabItem);

  const $tabItems = $tabContainer.querySelectorAll('.tab-item');
  $tabItems.forEach($tabItem => {
    $tabItem.addEventListener('click', e => {
      reset($tabContainer);
      activate($tabContainer, e.currentTarget);
    });
  });
});
