
// 전역 상태 변수
let currentCategory = null;
let currentWeapon = null;
let currentPanel = 'weapon';
let currentGear = null;
let lastGalleryImageIndex = 0;
let lastGridScrollY = 0;
let compareTarget = null;
let isAdmin = false;
const APP_STATE_KEY = 'smpz_handbook_state';

function loadData() {
    const savedWeapons = localStorage.getItem('smpz_weapons_data');
    if (savedWeapons) {
        try {
            const parsed = JSON.parse(savedWeapons);
            Object.assign(weaponsData, parsed);
        } catch(e) {}
    }
    const savedGear = localStorage.getItem('smpz_gear_data');
    if (savedGear) {
        try {
            const parsed = JSON.parse(savedGear);
            Object.assign(gearData, parsed);
        } catch(e) {}
    }
}

function saveData() {
    localStorage.setItem('smpz_weapons_data', JSON.stringify(weaponsData));
    localStorage.setItem('smpz_gear_data', JSON.stringify(gearData));
}

function saveAppState() {
    const state = {
        panel: currentPanel,
        category: currentCategory,
        itemId: currentWeapon ? currentWeapon.id : (currentGear ? currentGear.id : null),
        galleryIndex: lastGalleryImageIndex
    };
    sessionStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
}

function restoreAppState() {
    const raw = sessionStorage.getItem(APP_STATE_KEY);
    if (!raw) return false;
    try {
        const state = JSON.parse(raw);
        if (state.panel) {
            switchPanel(state.panel);
        }
        const showDetail = (it, cat) => {
            if (state.panel === 'gear') {
                showGearDetail(it, cat, state.galleryIndex || 0);
            } else if (state.panel === 'attachment') {
                showAttachmentDetail(it, cat, state.galleryIndex || 0);
            } else {
                showWeaponDetail(it, cat, state.galleryIndex || 0);
            }
        };
        if (state.category && state.category !== 'search' && state.itemId) {
            const dataSource = state.panel === 'gear' ? gearData : (state.panel === 'attachment' ? attachmentData : weaponsData);
            if (state.category === 'all') {
                for (const cat of Object.keys(dataSource)) {
                    const it = dataSource[cat].find(x => x.id === state.itemId);
                    if (it) {
                        renderItemGrid('all', state.panel);
                        showDetail(it, 'all');
                        return true;
                    }
                }
            } else if (dataSource[state.category]) {
                const it = dataSource[state.category].find(x => x.id === state.itemId);
                if (it) {
                    renderItemGrid(state.category, state.panel);
                    showDetail(it, state.category);
                    return true;
                }
            }
        }
    } catch(e) {}
    return false;
}

function switchPanel(panel) {
    currentPanel = panel;
    saveAppState();
    
    document.querySelectorAll('.panel-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.panel === panel);
    });
    
    const weaponPanel = document.getElementById('weaponPanel');
    const gearPanel = document.getElementById('gearPanel');
    const attachmentPanel = document.getElementById('attachmentPanel');
    
    if (weaponPanel) weaponPanel.style.display = panel === 'weapon' ? 'block' : 'none';
    if (gearPanel) gearPanel.style.display = panel === 'gear' ? 'block' : 'none';
    if (attachmentPanel) attachmentPanel.style.display = panel === 'attachment' ? 'block' : 'none';
    
    clearDetail();
    
    const searchInput = document.getElementById('itemSearch');
    if (searchInput) searchInput.value = '';
    
    if (panel === 'gear') {
        renderGearCategories();
    } else if (panel === 'attachment') {
        renderAttachmentCategories();
    } else {
        renderCategories();
    }
}


function showAttachmentDetail(attachment, categoryKey, initialGalleryIndex = 0) {
    const weaponDetail = showDetailContainer();
    currentCategory = categoryKey;
    currentWeapon = attachment;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();

    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === attachment.id) {
            item.classList.add('active');
        }
    });

    weaponDetail.innerHTML = '';
    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    detailCard.appendChild(createBackToGridButton());

    const nameContainer = document.createElement('div');
    nameContainer.className = 'weapon-detail-name-container';
    const name = document.createElement('div');
    name.className = 'weapon-detail-name';
    const nameText = document.createElement('span');
    nameText.className = 'weapon-name-text';
    nameText.textContent = attachment.name;
    name.appendChild(nameText);
    nameContainer.appendChild(name);
    detailCard.appendChild(nameContainer);
    
    const divider = document.createElement('div');
    divider.className = 'weapon-detail-divider';
    detailCard.appendChild(divider);
    
    const imagePanel = createImagePanelWithArrows(attachment, attachment.name, initialGalleryIndex, (idx) => {
        lastGalleryImageIndex = idx;
        saveAppState();
    });
    detailCard.appendChild(imagePanel);
    
    const descContainer = document.createElement('div');
    descContainer.className = 'weapon-detail-description-container';
    if (attachment.description) {
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = attachment.description;
        descContainer.appendChild(desc);
    } else {
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 부착물의 설명</div>';
    }
    detailCard.appendChild(descContainer);
    
    if (attachment.stats) {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'weapon-stats-container';
        
        const statsHeader = document.createElement('div');
        statsHeader.className = 'weapon-stats-header';
        const statsTitle = document.createElement('div');
        statsTitle.className = 'weapon-stats-title';
        statsTitle.textContent = '- 능력치 -';
        statsHeader.appendChild(statsTitle);
        statsContainer.appendChild(statsHeader);
        
        const statsList = document.createElement('div');
        statsList.className = 'weapon-stats-list';
        
        const statLabels = {
            'recoil': '반동',
            'sway': '흔들림',
            'weight': '무게',
            'capacity': '탄창 용량'
        };
        
        Object.keys(attachment.stats).forEach(key => {
            const row = document.createElement('div');
            row.className = 'weapon-stat-row';
            
            const label = document.createElement('span');
            label.className = 'weapon-stat-label';
            label.textContent = `${statLabels[key] || key}:`;
            
            const value = document.createElement('span');
            value.className = 'weapon-stat-value';
            value.textContent = attachment.stats[key] || '-';
            
            row.appendChild(label);
            row.appendChild(value);
            statsList.appendChild(row);
        });
        
        statsContainer.appendChild(statsList);
        detailCard.appendChild(statsContainer);
    }
    
    weaponDetail.appendChild(detailCard);
}


// 카테고리 드롭다운 열기/닫기 (상단바 버튼을 누르면 내려오는 목록)
function openDropdown() {
    const dropdown = document.getElementById('categoryDropdown');
    if (dropdown) dropdown.classList.add('open');
}

function closeDropdown() {
    const dropdown = document.getElementById('categoryDropdown');
    if (dropdown) dropdown.classList.remove('open');
}

// 그리드/상세 영역 전환 헬퍼
function showDetailContainer() {
    const gridView = document.getElementById('gridView');
    const isFromGrid = gridView && gridView.style.display !== 'none';
    if (isFromGrid) {
        lastGridScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    }
    if (gridView) gridView.style.display = 'none';
    const weaponDetail = document.getElementById('weaponDetail');
    weaponDetail.style.display = 'flex';

    if (isFromGrid) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    return weaponDetail;
}

function createBackToGridButton() {
    const wrap = document.createElement('div');
    wrap.className = 'back-to-grid-wrap';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'back-to-grid-btn';
    btn.textContent = '← 목록으로';
    btn.onclick = backToGrid;
    wrap.appendChild(btn);
    return wrap;
}

// 마지막으로 표시된 그리드 상태 (상세 화면에서 "목록으로" 이동 시 사용)
let lastGridState = null;

// 검색 시작 직전의 화면 상태 (검색창을 비우면 이 화면으로 복귀)
let preSearchView = null;

function captureCurrentView() {
    const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    if (currentWeapon) {
        return { type: 'detail', panel: currentPanel, category: currentCategory, item: currentWeapon, galleryIndex: lastGalleryImageIndex, scrollY: currentScrollY };
    }
    if (lastGridState) {
        return { type: 'grid', title: lastGridState.title, items: lastGridState.items, categoryKey: lastGridState.categoryKey, panelType: lastGridState.panelType, scrollY: currentScrollY };
    }
    return { type: 'empty' };
}

function restoreView(view) {
    if (!view || view.type === 'empty') {
        clearDetail();
        return;
    }
    if (view.type === 'detail') {
        if (view.panel === 'gear') {
            showGearDetail(view.item, view.category, view.galleryIndex || 0);
        } else if (view.panel === 'attachment') {
            showAttachmentDetail(view.item, view.category, view.galleryIndex || 0);
        } else {
            showWeaponDetail(view.item, view.category, view.galleryIndex || 0);
        }
        if (view.scrollY) {
            requestAnimationFrame(() => {
                window.scrollTo({ top: view.scrollY, left: 0, behavior: 'instant' });
            });
        }
    } else if (view.type === 'grid') {
        lastGridScrollY = view.scrollY || 0;
        showGridView(view.title, view.items, view.categoryKey, view.panelType, true);
    }
}

function backToGrid() {
    if (lastGridState) {
        showGridView(lastGridState.title, lastGridState.items, lastGridState.categoryKey, lastGridState.panelType, true);
    } else {
        clearDetail();
    }
}

// 카테고리 선택 시 해당 항목들을 메인 영역에 그리드로 표시
function renderItemGrid(categoryKey, panelType) {
    panelType = panelType || currentPanel;
    closeDropdown();

    // 검색 중이 아닌 실제 카테고리 진입이므로 검색 상태를 초기화
    preSearchView = null;
    const searchInput = document.getElementById('itemSearch');
    if (searchInput && searchInput.value) searchInput.value = '';

    const dataSource = panelType === 'gear' ? gearData : (panelType === 'attachment' ? attachmentData : weaponsData);
    let items;
    let title;
    if (categoryKey === 'all') {
        items = Object.values(dataSource).flat();
        title = panelType === 'gear' ? '기어 전체' : (panelType === 'attachment' ? '부착물 전체' : '무기 전체');
    } else {
        items = dataSource[categoryKey] || [];
        title = categoryKey;
    }

    showGridView(title, items, categoryKey, panelType);
}

// 이미 계산된 항목 목록을 그리드로 표시 (검색 결과 등에도 사용)
function showGridView(title, items, categoryKey, panelType, shouldRestoreScroll = false) {
    lastGridState = { title, items, categoryKey, panelType };
    currentPanel = panelType;
    currentCategory = categoryKey;
    currentWeapon = null;
    saveAppState();

    const gridView = document.getElementById('gridView');
    const weaponDetail = document.getElementById('weaponDetail');
    if (gridView) gridView.style.display = 'block';
    weaponDetail.style.display = 'none';
    weaponDetail.innerHTML = '';

    const gridTitle = document.getElementById('gridTitle');
    const gridCount = document.getElementById('gridCount');
    if (gridTitle) gridTitle.textContent = title;
    if (gridCount) gridCount.textContent = `${items.length}개`;

    const grid = document.getElementById('itemGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = '<p class="empty-message">표시할 항목이 없습니다.</p>';
        return;
    }

    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
    sortedItems.forEach(item => {
        grid.appendChild(createGridCard(item, categoryKey, panelType));
    });

    if (shouldRestoreScroll && lastGridScrollY > 0) {
        const targetY = lastGridScrollY;
        requestAnimationFrame(() => {
            window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
        });
    } else if (!shouldRestoreScroll) {
        lastGridScrollY = 0;
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
}

// 그리드 카드 생성 (이미지 + 이름)
function createGridCard(item, categoryKey, panelType) {
    const card = document.createElement('div');
    card.className = 'grid-card';
    card.dataset.itemId = item.id;
    card.dataset.weaponId = item.id;

    const imgWrap = document.createElement('div');
    imgWrap.className = 'grid-card-image';
    const images = getItemImages(item);
    if (images.length > 0) {
        const img = document.createElement('img');
        img.src = images[0];
        img.alt = item.name;
        img.onerror = function() {
            imgWrap.innerHTML = '<span class="grid-card-placeholder">-</span>';
        };
        imgWrap.appendChild(img);
    } else {
        imgWrap.innerHTML = '<span class="grid-card-placeholder">-</span>';
    }
    card.appendChild(imgWrap);

    const nameEl = document.createElement('div');
    nameEl.className = 'grid-card-name';
    nameEl.textContent = item.name;
    card.appendChild(nameEl);

    const realCategoryKey = item.category || categoryKey;
    card.addEventListener('click', () => {
        compareTarget = null;
        if (panelType === 'gear') {
            showGearDetail(item, realCategoryKey);
        } else if (panelType === 'attachment') {
            showAttachmentDetail(item, realCategoryKey);
        } else {
            showWeaponDetail(item, realCategoryKey);
        }
    });

    return card;
}

// 그리드가 특정 카테고리를 표시 중이면 최신 데이터로 새로고침
function refreshGridIfShowing(categoryKey, panelType) {
    if (lastGridState && lastGridState.panelType === panelType &&
        (lastGridState.categoryKey === categoryKey || lastGridState.categoryKey === 'all')) {
        renderItemGrid(lastGridState.categoryKey, panelType);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 모든 모달 닫기 (안전장치)
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        if (modal.id === 'imageModal') {
            modal.style.setProperty('display', 'none', 'important');
        } else {
            modal.style.display = 'none';
        }
    });
    
    loadData();
    renderCategories();
    renderGearCategories();
    renderAttachmentCategories();
    setupEventListeners();
    const restored = restoreAppState();
    if (!restored) {
        // 초기 진입 시 바로 무기 전체 그리드를 기본 화면으로 표시
        renderItemGrid('all', 'weapon');
    }
});











// 카테고리 렌더링
function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';

    // 전체 무기 카테고리 추가
    const totalCount = Object.values(weaponsData).reduce((sum, weapons) => sum + weapons.length, 0);
    const allCategory = createCategoryItem('무기', totalCount, 'all', 'weapon');
    categoryList.appendChild(allCategory);

    // 각 카테고리 추가
    Object.keys(weaponsData).forEach(key => {
        const count = weaponsData[key]?.length || 0;
        const item = createCategoryItem(key, count, key, 'weapon');
        categoryList.appendChild(item);
    });
}

// 기어 카테고리 렌더링
function renderGearCategories() {
    const categoryList = document.getElementById('gearCategoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';

    const totalCount = Object.values(gearData).reduce((sum, items) => sum + items.length, 0);
    const allCategory = createCategoryItem('기어 전체', totalCount, 'all', 'gear');
    categoryList.appendChild(allCategory);

    Object.keys(gearData).forEach(key => {
        const count = gearData[key]?.length || 0;
        const item = createCategoryItem(key, count, key, 'gear');
        categoryList.appendChild(item);
    });
}

// 부착물 카테고리 렌더링 (공통 createCategoryItem 템플릿 사용)
function renderAttachmentCategories() {
    const categoryList = document.getElementById('attachmentCategoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';

    const totalCount = Object.values(attachmentData).reduce((sum, items) => sum + items.length, 0);
    const allCategory = createCategoryItem('부착물 전체', totalCount, 'all', 'attachment');
    categoryList.appendChild(allCategory);

    Object.keys(attachmentData).forEach(key => {
        const count = attachmentData[key]?.length || 0;
        const item = createCategoryItem(key, count, key, 'attachment');
        categoryList.appendChild(item);
    });
}

// 카테고리 아이템 생성
function createCategoryItem(name, count, key, panelType) {
    panelType = panelType || 'weapon';
    const li = document.createElement('li');
    li.className = 'category-item';
    li.dataset.category = key;
    li.dataset.panelType = panelType;
    
    const link = document.createElement('div');
    link.className = 'category-link';
    link.dataset.category = key;
    
    // 카테고리별 아이콘 매핑
    const categoryIcons = {
        '권총': 'assets/pistol.png',
        '돌격 소총': 'assets/ar.png',
        '기관단총': 'assets/smg.png',
        '저격 소총': 'assets/sr.png',
        '산탄총': 'assets/shotgun.png',
        '경기관총': 'assets/lmg.png',
        '유탄 발사기': 'assets/gl.png'
    };
    
    // 아이콘 추가 (해당 카테고리에 아이콘이 있는 경우)
    if (categoryIcons[key]) {
        const iconImg = document.createElement('img');
        iconImg.src = categoryIcons[key];
        iconImg.alt = name;
        iconImg.className = 'category-icon';
        // 돌격 소총, 기관단총, 저격 소총 아이콘은 더 크게
        if (key === '돌격 소총' || key === '기관단총' || key === '저격 소총' || key === '산탄총' || key === '경기관총' || key === '유탄 발사기') {
            iconImg.classList.add('category-icon-large');
        }
        link.appendChild(iconImg);
    }
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'category-name';
    nameSpan.textContent = name;
    
    const countSpan = document.createElement('span');
    countSpan.className = 'category-count';
    countSpan.textContent = `(${count})`;
    
    link.appendChild(nameSpan);
    link.appendChild(countSpan);
    li.appendChild(link);

    // 카테고리 클릭 시 해당 항목들을 메인 영역에 그리드로 표시
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        renderItemGrid(key, panelType);
    });

    return li;
}

// 아이템 이미지 배열 추출 (image 단일 또는 images 배열 지원)
function getItemImages(item) {
    if (item.images && Array.isArray(item.images) && item.images.length > 0) {
        return item.images;
    }
    if (item.image) {
        return [item.image];
    }
    return [];
}

// 이미지/3D 패널 생성 (갤러리 타이틀 + 화살표 + 3D 인스펙트 뷰어 지원)
function createImagePanelWithArrows(item, itemName, initialImageIndex = 0, onImageIndexChange = null) {
    const images = getItemImages(item);
    const hasModel = Boolean(item && item.model);
    const galleryWrapper = document.createElement('div');
    galleryWrapper.className = 'gallery-panel-wrapper';
    
    // 갤러리 헤더 (타이틀 + 모드 스위치)
    const headerRow = document.createElement('div');
    headerRow.className = 'gallery-header-row';
    
    const galleryTitle = document.createElement('div');
    galleryTitle.className = 'gallery-title';
    galleryTitle.textContent = '- 갤러리 -';
    headerRow.appendChild(galleryTitle);
    
    let is3DMode = false;
    let modelViewerEl = null;

    if (hasModel) {
        const modeSwitch = document.createElement('div');
        modeSwitch.className = 'gallery-mode-switch';
        
        const btn2D = document.createElement('button');
        btn2D.type = 'button';
        btn2D.className = 'gallery-mode-btn active';
        btn2D.textContent = '2D 사진';
        
        const btn3D = document.createElement('button');
        btn3D.type = 'button';
        btn3D.className = 'gallery-mode-btn';
        btn3D.textContent = '3D 인스펙트';
        
        modeSwitch.appendChild(btn2D);
        modeSwitch.appendChild(btn3D);
        headerRow.appendChild(modeSwitch);
        
        btn2D.onclick = () => switchMode(false);
        btn3D.onclick = () => switchMode(true);
    }
    galleryWrapper.appendChild(headerRow);
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'weapon-detail-image-container';
    
    // 2D 뷰 요소들
    const hasMultiple = images.length > 1;
    const arrowLeft = document.createElement('button');
    arrowLeft.type = 'button';
    arrowLeft.className = 'image-nav-arrow image-nav-left';
    arrowLeft.innerHTML = '‹';
    arrowLeft.setAttribute('aria-label', '이전 이미지');
    if (!hasMultiple) {
        arrowLeft.classList.add('image-nav-disabled');
        arrowLeft.style.display = 'none';
    }
    
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'weapon-detail-image-wrapper';
    const img = document.createElement('img');
    img.className = 'weapon-detail-image';
    let currentIndex = Math.max(0, Math.min(initialImageIndex, Math.max(0, images.length - 1)));
    if (images.length > 0) {
        img.src = images[currentIndex];
        img.alt = itemName;
        img.style.cursor = 'pointer';
    }
    const placeholder = document.createElement('div');
    placeholder.className = 'weapon-image-placeholder';
    placeholder.textContent = '-';
    placeholder.style.display = images.length === 0 ? 'flex' : 'none';
    imgWrapper.appendChild(placeholder);
    
    if (images.length > 0) {
        img.onerror = function() {
            this.style.display = 'none';
            placeholder.style.display = 'flex';
        };
        img.onclick = function() {
            openImageModal(images[currentIndex], itemName);
        };
        imgWrapper.appendChild(img);
    }
    
    const arrowRight = document.createElement('button');
    arrowRight.type = 'button';
    arrowRight.className = 'image-nav-arrow image-nav-right';
    arrowRight.innerHTML = '›';
    arrowRight.setAttribute('aria-label', '다음 이미지');
    if (!hasMultiple) {
        arrowRight.classList.add('image-nav-disabled');
        arrowRight.style.display = 'none';
    }
    
    function updateImage() {
        if (images.length === 0) return;
        img.src = images[currentIndex];
        img.alt = itemName;
        img.style.display = '';
        placeholder.style.display = 'none';
        img.onclick = () => openImageModal(images[currentIndex], itemName);
    }
    
    if (hasMultiple) {
        const notifyChange = () => {
            if (typeof onImageIndexChange === 'function') onImageIndexChange(currentIndex);
        };
        const blurArrow = (e) => {
            e.target.blur();
        };
        arrowLeft.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
            notifyChange();
            blurArrow(e);
        });
        arrowRight.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
            notifyChange();
            blurArrow(e);
        });
    }
    
    imageContainer.appendChild(arrowLeft);
    imageContainer.appendChild(imgWrapper);
    imageContainer.appendChild(arrowRight);
    
    // 3D 뷰 요소 (hasModel일 때 준비)
    let modelViewerContainer = null;
    if (hasModel) {
        modelViewerContainer = document.createElement('div');
        modelViewerContainer.className = 'model-viewer-container';
        modelViewerContainer.style.display = 'none';
        
        modelViewerEl = document.createElement('model-viewer');
        modelViewerEl.className = 'weapon-model-viewer';
        modelViewerEl.setAttribute('src', item.model);
        if (images.length > 0) {
            modelViewerEl.setAttribute('poster', images[0]);
        }
        modelViewerEl.setAttribute('camera-controls', '');
        modelViewerEl.setAttribute('shadow-intensity', '1');
        modelViewerEl.setAttribute('shadow-softness', '0.5');
        modelViewerEl.setAttribute('exposure', '1.0');
        modelViewerEl.setAttribute('camera-orbit', '45deg 75deg auto');
        modelViewerEl.setAttribute('interaction-prompt', 'none');
        
        modelViewerContainer.appendChild(modelViewerEl);
        imageContainer.appendChild(modelViewerContainer);
    }
    
    function switchMode(to3D) {
        is3DMode = to3D;
        const btn2D = headerRow.querySelector('.gallery-mode-btn:first-child');
        const btn3D = headerRow.querySelector('.gallery-mode-btn:last-child');
        if (btn2D) btn2D.classList.toggle('active', !to3D);
        if (btn3D) btn3D.classList.toggle('active', to3D);
        
        if (to3D) {
            imgWrapper.style.display = 'none';
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
            if (modelViewerContainer) modelViewerContainer.style.display = 'flex';
        } else {
            imgWrapper.style.display = 'flex';
            if (hasMultiple) {
                arrowLeft.style.display = 'flex';
                arrowRight.style.display = 'flex';
            }
            if (modelViewerContainer) modelViewerContainer.style.display = 'none';
        }
    }
    
    galleryWrapper.appendChild(imageContainer);
    return galleryWrapper;
}

// 무기 상세 정보 표시
function showWeaponDetail(weapon, categoryKey, initialGalleryIndex = 0) {
    const weaponDetail = showDetailContainer();

    // 현재 기준 무기/카테고리 갱신
    currentCategory = categoryKey;
    currentWeapon = weapon;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();
    // 그리드의 선택된 무기 하이라이트
    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === weapon.id) {
            item.classList.add('active');
        }
    });

    weaponDetail.innerHTML = '';

    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    detailCard.appendChild(createBackToGridButton());

    // 무기 이름 (로고 포함)
    const nameContainer = document.createElement('div');
    nameContainer.className = 'weapon-detail-name-container';
    
    const name = document.createElement('div');
    name.className = 'weapon-detail-name';
    
    // 제조사 로고가 있으면 표시
    if (weapon.manufacturerLogo) {
        const logoImg = document.createElement('img');
        logoImg.className = 'weapon-manufacturer-logo';
        // 특정 로고는 필터 제거 (원본 색상 유지)
        const logosWithoutFilter = ['ai-logo', 'TsNIITochMash-logo', 'hk-logo', 'radian-logo', 'milkor-logo', 'kalashnikov-logo', 'mf-logo', 'dsarms-logo', 'barrett-logo', 'cheytac-logo'];
        if (logosWithoutFilter.some(logo => weapon.manufacturerLogo.includes(logo))) {
            logoImg.classList.add('logo-no-filter');
        }
        logoImg.src = weapon.manufacturerLogo;
        logoImg.alt = weapon.manufacturer || '';
        
        // 제조사 URL이 있으면 링크로 감싸기
        if (weapon.manufacturerUrl) {
            const logoLink = document.createElement('a');
            logoLink.href = weapon.manufacturerUrl;
            logoLink.target = '_blank';
            logoLink.rel = 'noopener noreferrer';
            logoLink.appendChild(logoImg);
            logoImg.onerror = function() {
                // 로고 이미지 로드 실패 시 제조사 이름만 텍스트로 표시
                logoLink.style.display = 'none';
                if (weapon.manufacturer) {
                    const manufacturerText = document.createElement('span');
                    manufacturerText.className = 'weapon-manufacturer-text';
                    manufacturerText.textContent = weapon.manufacturer;
                    name.appendChild(manufacturerText);
                }
            };
            name.appendChild(logoLink);
        } else {
            // URL이 없으면 그냥 이미지만 추가
            logoImg.onerror = function() {
                // 로고 이미지 로드 실패 시 제조사 이름만 텍스트로 표시
                this.style.display = 'none';
                if (weapon.manufacturer) {
                    const manufacturerText = document.createElement('span');
                    manufacturerText.className = 'weapon-manufacturer-text';
                    manufacturerText.textContent = weapon.manufacturer;
                    name.appendChild(manufacturerText);
                }
            };
            name.appendChild(logoImg);
        }
    } else if (weapon.manufacturer) {
        // 로고가 없으면 제조사 이름만 텍스트로 표시
        // URL이 있으면 링크로 감싸기
        if (weapon.manufacturerUrl) {
            const manufacturerLink = document.createElement('a');
            manufacturerLink.href = weapon.manufacturerUrl;
            manufacturerLink.target = '_blank';
            manufacturerLink.rel = 'noopener noreferrer';
            manufacturerLink.className = 'weapon-manufacturer-text';
            manufacturerLink.textContent = weapon.manufacturer;
            manufacturerLink.style.textDecoration = 'none';
            manufacturerLink.style.color = 'inherit';
            name.appendChild(manufacturerLink);
        } else {
            const manufacturerText = document.createElement('span');
            manufacturerText.className = 'weapon-manufacturer-text';
            manufacturerText.textContent = weapon.manufacturer;
            name.appendChild(manufacturerText);
        }
    }
    
    const nameText = document.createElement('span');
    nameText.className = 'weapon-name-text';
    nameText.textContent = weapon.name;
    name.appendChild(nameText);
    
    nameContainer.appendChild(name);
    detailCard.appendChild(nameContainer);
    
    // 구분선
    const divider = document.createElement('div');
    divider.className = 'weapon-detail-divider';
    detailCard.appendChild(divider);
    
    // 총기 사진 (화살표로 다중 이미지 탐색)
    const weaponImagePanel = createImagePanelWithArrows(weapon, weapon.name, initialGalleryIndex, (idx) => {
        lastGalleryImageIndex = idx;
        saveAppState();
    });
    detailCard.appendChild(weaponImagePanel);
    
    // 설명란
    if (weapon.description) {
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = weapon.description;
        descContainer.appendChild(desc);
        
        detailCard.appendChild(descContainer);
    } else {
        // 설명이 없을 경우 플레이스홀더
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 총기의 설명</div>';
        detailCard.appendChild(descContainer);
    }

    // 능력치 섹션
    if (weapon.stats) {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'weapon-stats-container';

        // 헤더: 제목 + 비교 버튼
        const statsHeader = document.createElement('div');
        statsHeader.className = 'weapon-stats-header';

        const statsHeaderSpacer = document.createElement('div');
        statsHeaderSpacer.className = 'weapon-stats-spacer';

        const statsTitle = document.createElement('div');
        statsTitle.className = 'weapon-stats-title';
        statsTitle.textContent = '- 능력치 -';

        const compareBtn = document.createElement('button');
        compareBtn.type = 'button';
        compareBtn.className = 'weapon-compare-btn';
        // 비교 대상이 설정되어 있으면 "비교 해제"로 표시
        const hasCompare = !!(compareTarget && compareTarget.weapon);
        compareBtn.textContent = hasCompare ? '비교 해제' : '비교';
        compareBtn.onclick = () => {
            if (compareTarget && compareTarget.weapon) {
                // 비교 해제: 비교 대상 초기화 후 현재 무기 다시 렌더링
                compareTarget = null;
                showWeaponDetail(weapon, categoryKey);
            } else {
                // 비교 시작: 모달 열기
                openCompareModal();
            }
        };

        statsHeader.appendChild(statsHeaderSpacer);
        statsHeader.appendChild(statsTitle);
        statsHeader.appendChild(compareBtn);
        statsContainer.appendChild(statsHeader);

        const statsList = document.createElement('div');
        statsList.className = 'weapon-stats-list';

        // 각 능력치별 최대값과 스케일 정의
        const statsDefs = [
            { key: 'recoil',      label: '반동',     max: 120,  invert: false },
            { key: 'sway',        label: '흔들림',   max: 210,  invert: false },
            { key: 'ergonomics',  label: '인체공학', max: 100,  invert: false },
            // DayZ 소스코드 기준: 일반 무기는 maxMOA = 25.0
            { key: 'accuracy',    label: '명중률',   max: 25.0, invert: true, isMoa: true },
            { key: 'velocity',    label: '탄속',     max: 1200, invert: false },
            { key: 'rpm',         label: 'RPM',      max: 1200, invert: false }
        ];

        statsDefs.forEach(stat => {
            const row = document.createElement('div');
            row.className = 'weapon-stat-row';

            const label = document.createElement('span');
            label.className = 'weapon-stat-label';
            label.textContent = `${stat.label}:`;

            const value = document.createElement('span');
            value.className = 'weapon-stat-value';
            const raw = weapon.stats[stat.key];
            const displayText = raw !== undefined && raw !== null && raw !== "" ? String(raw) : '-';
            value.textContent = displayText;

            row.appendChild(label);
            row.appendChild(value);
            statsList.appendChild(row);

            // 게이지 바 계산 (기준 무기)
            let numericValue = NaN;
            if (raw !== undefined && raw !== null && raw !== "") {
                if (stat.isMoa) {
                    // "1.24 MOA" 같은 문자열에서 숫자만 추출
                    const match = /([\d.]+)/.exec(String(raw));
                    if (match) numericValue = parseFloat(match[1]);
                } else {
                    numericValue = parseFloat(raw);
                }
            }

            let percent = 0;
            if (!isNaN(numericValue) && stat.max > 0) {
                if (stat.invert) {
                    // 값이 낮을수록 좋은 경우 (예: MOA)
                    percent = 100 - (numericValue / stat.max * 100);
                } else {
                    percent = (numericValue / stat.max) * 100;
                }
                percent = Math.max(0, Math.min(100, percent));
            }

            const bar = document.createElement('div');
            bar.className = 'weapon-stat-bar';

            const barFill = document.createElement('div');
            barFill.className = 'weapon-stat-bar-fill';
            barFill.style.width = `${percent}%`;

            bar.appendChild(barFill);
            statsList.appendChild(bar);

            // 비교 대상이 있는 경우, 두 번째 게이지 바 추가
            const compareWeapon = compareTarget && compareTarget.weapon ? compareTarget.weapon : null;
            if (compareWeapon && compareWeapon.stats && compareWeapon.id !== weapon.id) {
                const rawCompare = compareWeapon.stats[stat.key];
                let numericCompare = NaN;
                if (rawCompare !== undefined && rawCompare !== null && rawCompare !== "") {
                    if (stat.isMoa) {
                        const match2 = /([\d.]+)/.exec(String(rawCompare));
                        if (match2) numericCompare = parseFloat(match2[1]);
                    } else {
                        numericCompare = parseFloat(rawCompare);
                    }
                }

                let percentCompare = 0;
                if (!isNaN(numericCompare) && stat.max > 0) {
                    if (stat.invert) {
                        percentCompare = 100 - (numericCompare / stat.max * 100);
                    } else {
                        percentCompare = (numericCompare / stat.max) * 100;
                    }
                    percentCompare = Math.max(0, Math.min(100, percentCompare));
                }

                let diffClass = '';
                if (!isNaN(numericValue) && !isNaN(numericCompare)) {
                    let better = false;
                    let worse = false;

                    // 반동, 흔들림, 명중률(MOA)은 값이 낮을수록 좋음
                    // 실제 숫자 값을 비교해야 함 (percent는 invert 적용되어 있어서 잘못된 비교가 됨)
                    if (stat.key === 'recoil' || stat.key === 'sway' || stat.isMoa) {
                        better = numericCompare < numericValue;  // 비교값이 기준값보다 낮으면 좋음
                        worse = numericCompare > numericValue;   // 비교값이 기준값보다 높으면 나쁨
                    } else {
                        // 나머지(인체공학, 탄속, RPM)는 값이 높을수록 좋음
                        better = numericCompare > numericValue;  // 비교값이 기준값보다 높으면 좋음
                        worse = numericCompare < numericValue;   // 비교값이 기준값보다 낮으면 나쁨
                    }

                    if (better) {
                        diffClass = 'better';
                    } else if (worse) {
                        diffClass = 'worse';
                    } else {
                        diffClass = 'equal';
                    }
                }

                const compareBar = document.createElement('div');
                compareBar.className = 'weapon-stat-bar weapon-stat-bar-compare';

                const compareFill = document.createElement('div');
                compareFill.className = 'weapon-stat-bar-fill';
                if (diffClass) {
                    compareFill.classList.add(`stat-${diffClass}`);
                }
                compareFill.style.width = `${percentCompare}%`;

                compareBar.appendChild(compareFill);
                statsList.appendChild(compareBar);
            }
        });

        statsContainer.appendChild(statsList);

        // 설명 박스와 완전히 같은 폭으로 보이도록,
        // 설명 컨테이너 안에 능력치 섹션을 넣는다.
        const statsParent = weapon.description
            ? detailCard.querySelector('.weapon-detail-description-container')
            : detailCard;
        if (statsParent) {
            statsParent.appendChild(statsContainer);
        } else {
            detailCard.appendChild(statsContainer);
        }
    }
    
    // 관리자 모드일 경우 편집/삭제 버튼 표시
    if (isAdmin) {
        const actions = document.createElement('div');
        actions.className = 'weapon-detail-actions';
        
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = '수정';
        editBtn.onclick = () => editWeapon(weapon.id, categoryKey);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제';
        deleteBtn.onclick = () => deleteWeapon(weapon.id, categoryKey);
        
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        detailCard.appendChild(actions);
    }
    
    weaponDetail.appendChild(detailCard);
}

// 기어 상세 정보 표시
function showGearDetail(gear, categoryKey, initialGalleryIndex = 0) {
    const weaponDetail = showDetailContainer();

    currentCategory = categoryKey;
    currentWeapon = gear;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();

    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === gear.id) {
            item.classList.add('active');
        }
    });

    weaponDetail.innerHTML = '';

    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    detailCard.appendChild(createBackToGridButton());

    const nameContainer = document.createElement('div');
    nameContainer.className = 'weapon-detail-name-container';

    const name = document.createElement('div');
    name.className = 'weapon-detail-name';

    if (gear.manufacturerLogo) {
        const logoImg = document.createElement('img');
        logoImg.className = 'weapon-manufacturer-logo';
        const logosWithoutFilter = [
            'avon-logo',
            '511tac-logo'
        ];
        if (logosWithoutFilter.some(logo => gear.manufacturerLogo.includes(logo))) {
            logoImg.classList.add('logo-no-filter');
        }
        logoImg.src = gear.manufacturerLogo;
        logoImg.alt = gear.manufacturer || '';
        if (gear.manufacturerUrl) {
            const logoLink = document.createElement('a');
            logoLink.href = gear.manufacturerUrl;
            logoLink.target = '_blank';
            logoLink.rel = 'noopener noreferrer';
            logoLink.appendChild(logoImg);
            name.appendChild(logoLink);
        } else {
            name.appendChild(logoImg);
        }
    } else if (gear.manufacturer) {
        if (gear.manufacturerUrl) {
            const manufacturerLink = document.createElement('a');
            manufacturerLink.href = gear.manufacturerUrl;
            manufacturerLink.target = '_blank';
            manufacturerLink.rel = 'noopener noreferrer';
            manufacturerLink.className = 'weapon-manufacturer-text';
            manufacturerLink.textContent = gear.manufacturer;
            manufacturerLink.style.textDecoration = 'none';
            manufacturerLink.style.color = 'inherit';
            name.appendChild(manufacturerLink);
        } else {
            const manufacturerText = document.createElement('span');
            manufacturerText.className = 'weapon-manufacturer-text';
            manufacturerText.textContent = gear.manufacturer;
            name.appendChild(manufacturerText);
        }
    }
    
    const nameText = document.createElement('span');
    nameText.className = 'weapon-name-text';
    nameText.textContent = gear.name;
    name.appendChild(nameText);
    
    nameContainer.appendChild(name);
    detailCard.appendChild(nameContainer);
    
    const divider = document.createElement('div');
    divider.className = 'weapon-detail-divider';
    detailCard.appendChild(divider);
    
    // 기어 사진 (화살표로 다중 이미지 탐색)
    const gearImagePanel = createImagePanelWithArrows(gear, gear.name, initialGalleryIndex, (idx) => {
        lastGalleryImageIndex = idx;
        saveAppState();
    });
    detailCard.appendChild(gearImagePanel);
    
    if (gear.description) {
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = gear.description;
        descContainer.appendChild(desc);
        detailCard.appendChild(descContainer);
    } else {
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 기어의 설명</div>';
        detailCard.appendChild(descContainer);
    }
    
    // 기어 능력치 섹션 (탄/유혈/충격 데미지 보호률)
    if (gear.stats) {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'weapon-stats-container';

        const statsHeader = document.createElement('div');
        statsHeader.className = 'weapon-stats-header';
        const statsHeaderSpacer = document.createElement('div');
        statsHeaderSpacer.className = 'weapon-stats-spacer';
        const statsTitle = document.createElement('div');
        statsTitle.className = 'weapon-stats-title';
        statsTitle.textContent = '- 능력치 -';
        const statsHeaderSpacerRight = document.createElement('div');
        statsHeaderSpacerRight.className = 'weapon-stats-spacer';
        statsHeader.appendChild(statsHeaderSpacer);
        statsHeader.appendChild(statsTitle);
        statsHeader.appendChild(statsHeaderSpacerRight);
        statsContainer.appendChild(statsHeader);

        const statsList = document.createElement('div');
        statsList.className = 'weapon-stats-list';

        const gearStatsDefs = [
            { key: 'bulletDamageProtection', label: '총탄 데미지 보호률' },
            { key: 'bloodDamageProtection', label: '유혈 데미지 보호률' },
            { key: 'shockDamageProtection', label: '충격 데미지 보호률' }
        ];

        gearStatsDefs.forEach(stat => {
            const row = document.createElement('div');
            row.className = 'weapon-stat-row';

            const label = document.createElement('span');
            label.className = 'weapon-stat-label';
            label.textContent = `${stat.label}:`;

            const raw = gear.stats[stat.key];
            const displayText = raw !== undefined && raw !== null && raw !== "" ? `${String(raw)}%` : '-';

            const value = document.createElement('span');
            value.className = 'weapon-stat-value';
            value.textContent = displayText;

            row.appendChild(label);
            row.appendChild(value);
            statsList.appendChild(row);

            let numericValue = NaN;
            if (raw !== undefined && raw !== null && raw !== "") {
                numericValue = parseFloat(String(raw));
            }
            const percent = (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100)
                ? Math.min(100, Math.max(0, numericValue)) : 0;

            const bar = document.createElement('div');
            bar.className = 'weapon-stat-bar';

            const barFill = document.createElement('div');
            barFill.className = 'weapon-stat-bar-fill';
            barFill.style.width = `${percent}%`;

            bar.appendChild(barFill);
            statsList.appendChild(bar);
        });

        statsContainer.appendChild(statsList);

        const statsParent = gear.description
            ? detailCard.querySelector('.weapon-detail-description-container')
            : detailCard;
        if (statsParent) {
            statsParent.appendChild(statsContainer);
        } else {
            detailCard.appendChild(statsContainer);
        }
    }
    
    // 차콜 테블릿 필터 충전 패널 (호흡기, 방독면, Gas mask, respirator - 이름 또는 설명에 포함 시)
    const filterKeywords = ['호흡기', '방독면', 'gas mask', 'respirator'];
    const gearText = `${gear.name || ''} ${gear.description || ''}`.toLowerCase();
    const hasFilterKeyword = filterKeywords.some(kw => gearText.includes(kw.toLowerCase()));
    if (hasFilterKeyword) {
        const filterPanel = document.createElement('div');
        filterPanel.className = 'gear-filter-charge-panel';
        
        const filterHeader = document.createElement('div');
        filterHeader.className = 'weapon-stats-header';
        const filterSpacer = document.createElement('div');
        filterSpacer.className = 'weapon-stats-spacer';
        const filterTitle = document.createElement('div');
        filterTitle.className = 'weapon-stats-title';
        filterTitle.textContent = '- 필터 충전 가능 여부 -';
        const filterSpacerRight = document.createElement('div');
        filterSpacerRight.className = 'weapon-stats-spacer';
        filterHeader.appendChild(filterSpacer);
        filterHeader.appendChild(filterTitle);
        filterHeader.appendChild(filterSpacerRight);
        filterPanel.appendChild(filterHeader);
        
        const charcoalRow = document.createElement('div');
        charcoalRow.className = 'gear-filter-charge-row';
        const charcoalImg = document.createElement('img');
        charcoalImg.src = 'assets/charcoal.png';
        charcoalImg.alt = '차콜 테블릿';
        charcoalImg.className = 'gear-charcoal-img';
        charcoalRow.appendChild(charcoalImg);
        
        const filterValue = document.createElement('span');
        filterValue.className = 'gear-filter-value';
        const fc = (gear.filterChargeable || '').toLowerCase();
        if (fc === 'yes') {
            filterValue.textContent = '가능';
            filterValue.classList.add('filter-yes');
        } else if (fc === 'no') {
            filterValue.textContent = '불가능';
            filterValue.classList.add('filter-no');
        } else {
            filterValue.textContent = '미설정';
            filterValue.classList.add('filter-unset');
        }
        charcoalRow.appendChild(filterValue);
        
        filterPanel.appendChild(charcoalRow);
        
        const filterParent = detailCard.querySelector('.weapon-detail-description-container') || detailCard;
        filterParent.appendChild(filterPanel);
    }
    
    if (isAdmin) {
        const actions = document.createElement('div');
        actions.className = 'weapon-detail-actions';
        
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = '수정';
        editBtn.onclick = () => editGear(gear.id, categoryKey);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제';
        deleteBtn.onclick = () => deleteGear(gear.id, categoryKey);
        
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        detailCard.appendChild(actions);
    }
    
    weaponDetail.appendChild(detailCard);
}

// 무기 상세 정보 초기화
function clearWeaponDetail() {
    clearDetail();
}

// 상세 정보 초기화 (무기/기어 공통)
function clearDetail() {
    const gridView = document.getElementById('gridView');
    if (gridView) gridView.style.display = 'none';
    const weaponDetail = document.getElementById('weaponDetail');
    weaponDetail.style.display = 'flex';
    const msg = currentPanel === 'gear'
        ? '상단 메뉴에서 카테고리를 선택하고 기어를 클릭하여 정보를 확인하세요.'
        : '상단 메뉴에서 카테고리를 선택하고 항목을 클릭하여 정보를 확인하세요.';
    weaponDetail.innerHTML = '<p class="empty-message">' + msg + '</p>';

    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
    });

    currentWeapon = null;
    currentCategory = null;
    lastGridState = null;
    preSearchView = null;
    lastGridScrollY = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}


// 이벤트 리스너 설정
function setupEventListeners() {
    // 패널 전환 버튼 (누르면 카테고리 드롭다운이 내려옴)
    // 같은 패널을 다시 누른 경우에는 드롭다운만 여닫고, 현재 표시 중인 목록/상세는 그대로 유지한다.
    document.querySelectorAll('.panel-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.dataset.panel;
            const dropdown = document.getElementById('categoryDropdown');
            const isOpen = dropdown && dropdown.classList.contains('open');

            if (panel !== currentPanel) {
                switchPanel(panel);
                renderItemGrid('all', panel);
                openDropdown();
            } else if (isOpen) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });
    });

    // 드롭다운 바깥을 클릭하면 닫기
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('categoryDropdown');
        if (!dropdown || !dropdown.classList.contains('open')) return;
        if (dropdown.contains(e.target)) return;
        if (e.target.closest('.panel-btn')) return;
        closeDropdown();
    });

    // 관리자 로그인 버튼
    document.getElementById('adminLoginBtn').addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'block';
    });
    
    // 로그아웃 버튼
    document.getElementById('adminLogoutBtn').addEventListener('click', logout);
    
    // 로그인 폼
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // 무기 폼
    document.getElementById('weaponForm').addEventListener('submit', handleWeaponSubmit);
    
    // 기어 폼
    document.getElementById('gearForm').addEventListener('submit', handleGearSubmit);
    
    // 기어 추가 버튼
    const gearAddBtn = document.getElementById('gearAddBtn');
    if (gearAddBtn) {
        gearAddBtn.addEventListener('click', () => openGearModal(null, null));
    }
    
    // 검색창 이벤트 리스너
    const searchInput = document.getElementById('itemSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchItems(e.target.value);
        });
    }
    
    // 모달 닫기
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // 이미지 확대 모달 닫기
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        // 모달이 기본적으로 닫혀있도록 보장
        imageModal.style.display = 'none';
        
        const closeImageBtn = document.querySelector('.close-image');
        if (closeImageBtn) {
            closeImageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                imageModal.style.setProperty('display', 'none', 'important');
            });
        }
        
        // 이미지 모달 외부 클릭 시 닫기
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal || e.target.classList.contains('image-modal')) {
                imageModal.style.setProperty('display', 'none', 'important');
            }
        });
    }
    
    // ESC 키로 모든 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDropdown();
            const imageModal = document.getElementById('imageModal');
            if (imageModal) {
                const computedStyle = window.getComputedStyle(imageModal);
                if (computedStyle.display !== 'none') {
                    imageModal.style.setProperty('display', 'none', 'important');
                }
            }
            // 다른 모달들도 닫기
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.id !== 'imageModal') {
                    const computedStyle = window.getComputedStyle(modal);
                    if (computedStyle.display !== 'none') {
                        modal.style.display = 'none';
                    }
                }
            });
        }
    });
}

// 이미지 확대 모달 열기
function openImageModal(imageSrc, imageAlt) {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (imageModal && modalImage) {
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        imageModal.style.setProperty('display', 'flex', 'important');
    }
}

// 로그인 처리
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 간단한 인증 (실제로는 서버에서 처리해야 함)
    // 기본 관리자 계정: admin / 488538
    if (username === 'admin' && password === '488538') {
        isAdmin = true;
        document.getElementById('adminLoginBtn').style.display = 'none';
        document.getElementById('adminLogoutBtn').style.display = 'block';
        document.getElementById('loginModal').style.display = 'none';
        
        const gearAddWrap = document.getElementById('gearAddBtnWrap');
        if (gearAddWrap) gearAddWrap.style.display = 'block';
        
        if (currentWeapon && currentCategory) {
            if (currentPanel === 'gear') {
                showGearDetail(currentWeapon, currentCategory);
            } else {
                showWeaponDetail(currentWeapon, currentCategory);
            }
        }
        
        alert('관리자로 로그인되었습니다.');
    } else {
        alert('잘못된 사용자명 또는 비밀번호입니다.');
    }
}

// 로그아웃
function logout() {
    isAdmin = false;
    document.getElementById('adminLoginBtn').style.display = 'block';
    document.getElementById('adminLogoutBtn').style.display = 'none';
    
    const gearAddWrap = document.getElementById('gearAddBtnWrap');
    if (gearAddWrap) gearAddWrap.style.display = 'none';
    
    if (currentWeapon && currentCategory) {
        if (currentPanel === 'gear') {
            showGearDetail(currentWeapon, currentCategory);
        } else {
            showWeaponDetail(currentWeapon, currentCategory);
        }
    }
    
    alert('로그아웃되었습니다.');
}

// 무기 모달 열기
function openWeaponModal(weaponId = null, categoryKey = null) {
    editingWeaponId = weaponId;
    const modal = document.getElementById('weaponModal');
    const title = document.getElementById('weaponModalTitle');
    
    if (weaponId) {
        title.textContent = '무기 수정';
        const weapon = weaponsData[categoryKey].find(w => w.id === weaponId);
        if (weapon) {
            document.getElementById('weaponId').value = weaponId;
            document.getElementById('weaponName').value = weapon.name;
            document.getElementById('weaponCategory').value = categoryKey;
            document.getElementById('weaponManufacturer').value = weapon.manufacturer || '';
            document.getElementById('weaponManufacturerLogo').value = weapon.manufacturerLogo || '';
            document.getElementById('weaponManufacturerUrl').value = weapon.manufacturerUrl || '';
            document.getElementById('weaponImage').value = (weapon.images && weapon.images.length) ? weapon.images.join(', ') : (weapon.image || '');
            document.getElementById('weaponDescription').value = weapon.description || '';
        }
    } else {
        title.textContent = '무기 추가';
        document.getElementById('weaponForm').reset();
        document.getElementById('weaponId').value = '';
        if (currentCategory && currentCategory !== 'all' && currentCategory !== 'search') {
            document.getElementById('weaponCategory').value = currentCategory;
        }
    }
    
    modal.style.display = 'block';
}

// 무기 모달 닫기
function closeWeaponModal() {
    document.getElementById('weaponModal').style.display = 'none';
    editingWeaponId = null;
}

// 무기 추가/수정 처리
function handleWeaponSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('weaponName').value;
    const category = document.getElementById('weaponCategory').value;
    const manufacturer = document.getElementById('weaponManufacturer').value;
    const manufacturerLogo = document.getElementById('weaponManufacturerLogo').value;
    const manufacturerUrl = document.getElementById('weaponManufacturerUrl').value;
    const imageInput = document.getElementById('weaponImage').value.trim();
    const description = document.getElementById('weaponDescription').value;
    const imagePaths = imageInput ? imageInput.split(',').map(s => s.trim()).filter(Boolean) : [];
    
    if (!category) {
        alert('카테고리를 선택해주세요.');
        return;
    }
    
    if (editingWeaponId) {
        // 수정
        const weaponIndex = weaponsData[category].findIndex(w => w.id === editingWeaponId);
        if (weaponIndex !== -1) {
            weaponsData[category][weaponIndex].name = name;
            weaponsData[category][weaponIndex].manufacturer = manufacturer;
            weaponsData[category][weaponIndex].manufacturerLogo = manufacturerLogo;
            weaponsData[category][weaponIndex].manufacturerUrl = manufacturerUrl;
            if (imagePaths.length > 1) {
                weaponsData[category][weaponIndex].images = imagePaths;
                delete weaponsData[category][weaponIndex].image;
            } else if (imagePaths.length === 1) {
                weaponsData[category][weaponIndex].image = imagePaths[0];
                delete weaponsData[category][weaponIndex].images;
            } else {
                weaponsData[category][weaponIndex].image = '';
                delete weaponsData[category][weaponIndex].images;
            }
            weaponsData[category][weaponIndex].description = description;
        }
    } else {
        // 추가
        const newWeapon = {
            id: Date.now().toString(),
            name: name,
            manufacturer: manufacturer,
            manufacturerLogo: manufacturerLogo,
            manufacturerUrl: manufacturerUrl,
            description: description
        };
        if (imagePaths.length > 1) {
            newWeapon.images = imagePaths;
        } else if (imagePaths.length === 1) {
            newWeapon.image = imagePaths[0];
        } else {
            newWeapon.image = '';
        }
        weaponsData[category].push(newWeapon);
    }
    
    saveData();
    renderCategories();
    refreshGridIfShowing(category, 'weapon');

    closeWeaponModal();
    
    alert(editingWeaponId ? '무기가 수정되었습니다.' : '무기가 추가되었습니다.');
    
    // 수정한 경우 현재 표시된 무기 정보 업데이트
    if (editingWeaponId) {
        const updatedWeapon = weaponsData[category].find(w => w.id === editingWeaponId);
        if (updatedWeapon) {
            showWeaponDetail(updatedWeapon, category);
        }
    }
}

// 무기 수정
function editWeapon(weaponId, categoryKey) {
    openWeaponModal(weaponId, categoryKey);
}

// 무기 삭제
function deleteWeapon(weaponId, categoryKey) {
    if (confirm('정말 이 무기를 삭제하시겠습니까?')) {
        weaponsData[categoryKey] = weaponsData[categoryKey].filter(w => w.id !== weaponId);
        saveData();
        renderCategories();
        refreshGridIfShowing(categoryKey, 'weapon');

        // 메인 영역 초기화
        clearWeaponDetail();
        alert('무기가 삭제되었습니다.');
    }
}

// 기어 모달 열기
function openGearModal(gearId = null, categoryKey = null) {
    editingGearId = gearId;
    const modal = document.getElementById('gearModal');
    const title = document.getElementById('gearModalTitle');
    
    if (gearId) {
        title.textContent = '기어 수정';
        const gear = gearData[categoryKey].find(g => g.id === gearId);
        if (gear) {
            document.getElementById('gearId').value = gearId;
            document.getElementById('gearName').value = gear.name;
            document.getElementById('gearCategory').value = categoryKey;
            document.getElementById('gearManufacturer').value = gear.manufacturer || '';
            document.getElementById('gearManufacturerLogo').value = gear.manufacturerLogo || '';
            document.getElementById('gearManufacturerUrl').value = gear.manufacturerUrl || '';
            document.getElementById('gearImage').value = (gear.images && gear.images.length) ? gear.images.join(', ') : (gear.image || '');
            document.getElementById('gearDescription').value = gear.description || '';
            document.getElementById('gearBulletDamageProtection').value = gear.stats?.bulletDamageProtection ?? '';
            document.getElementById('gearBloodDamageProtection').value = gear.stats?.bloodDamageProtection ?? '';
            document.getElementById('gearShockDamageProtection').value = gear.stats?.shockDamageProtection ?? '';
        }
    } else {
        title.textContent = '기어 추가';
        document.getElementById('gearForm').reset();
        document.getElementById('gearId').value = '';
        if (currentCategory && currentCategory !== 'all' && currentCategory !== 'search') {
            document.getElementById('gearCategory').value = currentCategory;
        }
    }
    
    modal.style.display = 'block';
}

// 기어 모달 닫기
function closeGearModal() {
    document.getElementById('gearModal').style.display = 'none';
    editingGearId = null;
}

// 기어 추가/수정 처리
function handleGearSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('gearName').value;
    const category = document.getElementById('gearCategory').value;
    const manufacturer = document.getElementById('gearManufacturer').value;
    const manufacturerLogo = document.getElementById('gearManufacturerLogo').value;
    const manufacturerUrl = document.getElementById('gearManufacturerUrl').value;
    const gearImageInput = document.getElementById('gearImage').value.trim();
    const description = document.getElementById('gearDescription').value;
    const gearImagePaths = gearImageInput ? gearImageInput.split(',').map(s => s.trim()).filter(Boolean) : [];
    const bulletProt = document.getElementById('gearBulletDamageProtection').value.trim();
    const bloodProt = document.getElementById('gearBloodDamageProtection').value.trim();
    const shockProt = document.getElementById('gearShockDamageProtection').value.trim();

    const stats = {};
    if (bulletProt !== '') stats.bulletDamageProtection = bulletProt;
    if (bloodProt !== '') stats.bloodDamageProtection = bloodProt;
    if (shockProt !== '') stats.shockDamageProtection = shockProt;
    
    if (!category) {
        alert('카테고리를 선택해주세요.');
        return;
    }
    
    if (editingGearId) {
        const gearIndex = gearData[category].findIndex(g => g.id === editingGearId);
        if (gearIndex !== -1) {
            gearData[category][gearIndex].name = name;
            gearData[category][gearIndex].manufacturer = manufacturer;
            gearData[category][gearIndex].manufacturerLogo = manufacturerLogo;
            gearData[category][gearIndex].manufacturerUrl = manufacturerUrl;
            if (gearImagePaths.length > 1) {
                gearData[category][gearIndex].images = gearImagePaths;
                delete gearData[category][gearIndex].image;
            } else if (gearImagePaths.length === 1) {
                gearData[category][gearIndex].image = gearImagePaths[0];
                delete gearData[category][gearIndex].images;
            } else {
                gearData[category][gearIndex].image = '';
                delete gearData[category][gearIndex].images;
            }
            gearData[category][gearIndex].description = description;
            gearData[category][gearIndex].stats = Object.keys(stats).length > 0 ? stats : undefined;
        }
    } else {
        const newGear = {
            id: Date.now().toString(),
            name: name,
            manufacturer: manufacturer,
            manufacturerLogo: manufacturerLogo,
            manufacturerUrl: manufacturerUrl,
            description: description
        };
        if (gearImagePaths.length > 1) {
            newGear.images = gearImagePaths;
        } else if (gearImagePaths.length === 1) {
            newGear.image = gearImagePaths[0];
        } else {
            newGear.image = '';
        }
        if (Object.keys(stats).length > 0) {
            newGear.stats = stats;
        }
        gearData[category].push(newGear);
    }
    
    saveData();
    renderGearCategories();
    refreshGridIfShowing(category, 'gear');

    closeGearModal();
    alert(editingGearId ? '기어가 수정되었습니다.' : '기어가 추가되었습니다.');
    
    if (editingGearId) {
        const updatedGear = gearData[category].find(g => g.id === editingGearId);
        if (updatedGear) {
            showGearDetail(updatedGear, category);
        }
    }
}

// 기어 수정
function editGear(gearId, categoryKey) {
    openGearModal(gearId, categoryKey);
}

// 기어 삭제
function deleteGear(gearId, categoryKey) {
    if (confirm('정말 이 기어를 삭제하시겠습니까?')) {
        gearData[categoryKey] = gearData[categoryKey].filter(g => g.id !== gearId);
        saveData();
        renderGearCategories();
        refreshGridIfShowing(categoryKey, 'gear');

        clearDetail();
        alert('기어가 삭제되었습니다.');
    }
}

// 능력치 비교 모달 열기
function openCompareModal() {
    const modal = document.getElementById('compareModal');
    const listContainer = document.getElementById('compareWeaponList');
    const currentLabel = document.getElementById('compareCurrentWeapon');

    if (!modal || !listContainer) return;
    if (!currentWeapon) {
        alert('먼저 기준이 될 무기를 선택해주세요.');
        return;
    }

    listContainer.innerHTML = '';
    if (currentLabel) {
        // 기준 무기 표시는 이름만 사용 (이름 안에 제조사가 포함될 수 있으므로)
        currentLabel.textContent = `기준 무기: ${currentWeapon.name}`;
    }

    // 모든 카테고리의 무기 목록을 모아서 표시
    Object.keys(weaponsData).forEach(categoryKey => {
        const list = weaponsData[categoryKey] || [];
        list.forEach(w => {
            // 스탯이 있는 무기만 대상, 자기 자신 제외
            if (!w.stats || (currentWeapon && w.id === currentWeapon.id)) return;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'compare-weapon-item';
            // 비교 목록에는 총기 이름만 표기 (이미 이름에 제조사가 포함될 수 있음)
            btn.textContent = w.name;
            btn.onclick = () => {
                compareTarget = { weapon: w, categoryKey };
                modal.style.display = 'none';
                // 현재 무기를 다시 렌더링하여 비교 바를 표시
                if (currentWeapon && currentCategory) {
                    showWeaponDetail(currentWeapon, currentCategory);
                }
            };
            listContainer.appendChild(btn);
        });
    });

    modal.style.display = 'block';
}

// 무기/기어 검색 함수 (검색 결과를 그리드로 표시)
function searchItems(query) {
    const trimmed = (query || '').trim();
    if (!trimmed) {
        // 검색창이 비면 검색 시작 전 화면으로 복귀
        if (preSearchView) {
            const view = preSearchView;
            preSearchView = null;
            restoreView(view);
        }
        return;
    }

    // 검색을 처음 시작하는 시점의 화면을 기억해둔다
    if (!preSearchView) {
        preSearchView = captureCurrentView();
    }

    const lowerQuery = trimmed.toLowerCase();
    const dataSource = currentPanel === 'gear' ? gearData : (currentPanel === 'attachment' ? attachmentData : weaponsData);

    const matches = [];
    Object.keys(dataSource).forEach(categoryKey => {
        dataSource[categoryKey].forEach(item => {
            const nameMatch = item.name.toLowerCase().includes(lowerQuery);
            const keywordMatch = item.keyword && item.keyword.toLowerCase().includes(lowerQuery);
            const manufacturerMatch = item.manufacturer && item.manufacturer.toLowerCase().includes(lowerQuery);
            if (nameMatch || keywordMatch || manufacturerMatch) {
                matches.push(item);
            }
        });
    });

    closeDropdown();
    showGridView(`"${trimmed}" 검색 결과`, matches, 'search', currentPanel);
}

