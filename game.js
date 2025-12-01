// ==================== 遊戲資料定義 ====================

// 物品形狀定義 (相對於左上角的偏移座標 [x, y])
const SHAPES = {
    // 1格
    single: [[0, 0]],

    // 2格
    horizontal_2: [[0, 0], [1, 0]],
    vertical_2: [[0, 0], [0, 1]],

    // 3格
    horizontal_3: [[0, 0], [1, 0], [2, 0]],
    vertical_3: [[0, 0], [0, 1], [0, 2]],
    L_shape: [[0, 0], [0, 1], [1, 1]],
    L_shape_90: [[0, 0], [1, 0], [0, 1]],
    L_shape_180: [[0, 0], [1, 0], [1, 1]],
    L_shape_270: [[0, 1], [1, 0], [1, 1]],

    // 4格
    square: [[0, 0], [1, 0], [0, 1], [1, 1]],
    horizontal_4: [[0, 0], [1, 0], [2, 0], [3, 0]],
    vertical_4: [[0, 0], [0, 1], [0, 2], [0, 3]],
    T_shape: [[0, 0], [1, 0], [2, 0], [1, 1]],
    T_shape_90: [[0, 0], [0, 1], [1, 1], [0, 2]],
    T_shape_180: [[1, 0], [0, 1], [1, 1], [2, 1]],
    T_shape_270: [[1, 0], [0, 1], [1, 1], [1, 2]],
    S_shape: [[1, 0], [2, 0], [0, 1], [1, 1]],
    Z_shape: [[0, 0], [1, 0], [1, 1], [2, 1]],

    // 5格
    plus: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
    big_L: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
    lightning: [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3]],
    lightning_flip: [[1, 0], [1, 1], [0, 1], [0, 2], [0, 3]],

    // 6格
    rect_2x3: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [1, 2]],
    rect_3x2: [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
    big_lightning: [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2]],
};

// 職業資料
const CLASSES = {
    warrior: {
        name: '戰士',
        icon: '⚔️',
        description: '高生命、高防禦的近戰職業',
        baseHp: 120,
        attackBonus: 1.15,
        defenseBonus: 1.25,
        hpBonus: 1.2,
        startingRows: 3,
        startingCols: 4
    },
    mage: {
        name: '法師',
        icon: '🔮',
        description: '高攻擊的輸出職業',
        baseHp: 80,
        attackBonus: 1.4,
        defenseBonus: 0.9,
        hpBonus: 1.0,
        startingRows: 3,
        startingCols: 4
    },
    ranger: {
        name: '遊俠',
        icon: '🏹',
        description: '平衡型職業，各項能力均衡',
        baseHp: 100,
        attackBonus: 1.2,
        defenseBonus: 1.1,
        hpBonus: 1.1,
        startingRows: 3,
        startingCols: 4
    }
};

// 物品資料庫 (含形狀)
const ITEMS = {
    // ===== 武器 =====
    wooden_sword: {
        name: '木劍',
        icon: '🗡️',
        type: 'weapon',
        rarity: 'common',
        shape: 'vertical_2',
        attack: 8,
        defense: 0,
        hp: 0,
        price: 3,
        description: '簡單的木製劍，適合新手使用'
    },
    iron_sword: {
        name: '鐵劍',
        icon: '⚔️',
        type: 'weapon',
        rarity: 'uncommon',
        shape: 'vertical_3',
        attack: 15,
        defense: 0,
        hp: 0,
        price: 6,
        description: '堅固的鐵劍，傷害可觀'
    },
    flame_blade: {
        name: '烈焰之刃',
        icon: '🔥',
        type: 'weapon',
        rarity: 'rare',
        shape: 'L_shape',
        attack: 25,
        defense: 0,
        hp: 0,
        price: 12,
        description: '附著火焰的魔法劍'
    },
    frost_axe: {
        name: '寒霜戰斧',
        icon: '🪓',
        type: 'weapon',
        rarity: 'rare',
        shape: 'T_shape',
        attack: 22,
        defense: 5,
        hp: 0,
        price: 11,
        description: '散發寒氣的戰斧'
    },
    thunder_hammer: {
        name: '雷霆之錘',
        icon: '🔨',
        type: 'weapon',
        rarity: 'epic',
        shape: 'T_shape_180',
        attack: 35,
        defense: 8,
        hp: 0,
        price: 18,
        description: '蘊含雷電之力的神錘'
    },
    dragon_slayer: {
        name: '屠龍劍',
        icon: '🐲',
        type: 'weapon',
        rarity: 'legendary',
        shape: 'big_L',
        attack: 50,
        defense: 10,
        hp: 20,
        price: 30,
        description: '傳說中能斬殺巨龍的神兵'
    },
    short_bow: {
        name: '短弓',
        icon: '🏹',
        type: 'weapon',
        rarity: 'common',
        shape: 'L_shape_90',
        attack: 10,
        defense: 0,
        hp: 0,
        price: 3,
        description: '輕便的短弓'
    },
    longbow: {
        name: '長弓',
        icon: '🎯',
        type: 'weapon',
        rarity: 'uncommon',
        shape: 'vertical_4',
        attack: 18,
        defense: 0,
        hp: 0,
        price: 7,
        description: '射程較遠的長弓'
    },
    apprentice_staff: {
        name: '學徒法杖',
        icon: '🪄',
        type: 'weapon',
        rarity: 'common',
        shape: 'vertical_2',
        attack: 6,
        defense: 0,
        hp: 5,
        price: 3,
        description: '魔法學徒的基礎法杖'
    },
    crystal_staff: {
        name: '水晶法杖',
        icon: '🔮',
        type: 'weapon',
        rarity: 'rare',
        shape: 'T_shape_270',
        attack: 28,
        defense: 0,
        hp: 10,
        price: 13,
        description: '鑲嵌水晶的魔法法杖'
    },
    dagger: {
        name: '匕首',
        icon: '🔪',
        type: 'weapon',
        rarity: 'common',
        shape: 'single',
        attack: 5,
        defense: 0,
        hp: 0,
        price: 2,
        description: '小巧的匕首，只佔一格'
    },
    poison_dagger: {
        name: '毒刃',
        icon: '🗡️',
        type: 'weapon',
        rarity: 'uncommon',
        shape: 'horizontal_2',
        attack: 12,
        defense: 0,
        hp: 0,
        price: 5,
        description: '淬毒的匕首'
    },

    // ===== 防具 =====
    leather_armor: {
        name: '皮甲',
        icon: '🦺',
        type: 'armor',
        rarity: 'common',
        shape: 'square',
        attack: 0,
        defense: 8,
        hp: 10,
        price: 4,
        description: '基礎的皮革護甲'
    },
    chain_mail: {
        name: '鎖子甲',
        icon: '⛓️',
        type: 'armor',
        rarity: 'uncommon',
        shape: 'T_shape',
        attack: 0,
        defense: 15,
        hp: 15,
        price: 8,
        description: '由金屬環扣製成的護甲'
    },
    plate_armor: {
        name: '板甲',
        icon: '🛡️',
        type: 'armor',
        rarity: 'rare',
        shape: 'plus',
        attack: 0,
        defense: 25,
        hp: 30,
        price: 14,
        description: '厚重的金屬板甲'
    },
    dragon_scale: {
        name: '龍鱗甲',
        icon: '🐉',
        type: 'armor',
        rarity: 'legendary',
        shape: 'big_L',
        attack: 8,
        defense: 40,
        hp: 50,
        price: 28,
        description: '以龍鱗製成的傳說護甲'
    },
    wooden_shield: {
        name: '木盾',
        icon: '🪵',
        type: 'shield',
        rarity: 'common',
        shape: 'vertical_2',
        attack: 0,
        defense: 10,
        hp: 5,
        price: 3,
        description: '簡單的木製盾牌'
    },
    iron_shield: {
        name: '鐵盾',
        icon: '🛡️',
        type: 'shield',
        rarity: 'uncommon',
        shape: 'square',
        attack: 0,
        defense: 18,
        hp: 15,
        price: 7,
        description: '堅固的鐵盾'
    },
    tower_shield: {
        name: '塔盾',
        icon: '🏰',
        type: 'shield',
        rarity: 'rare',
        shape: 'vertical_3',
        attack: 0,
        defense: 30,
        hp: 25,
        price: 12,
        description: '巨大的塔盾，防禦極高'
    },

    // ===== 飾品 =====
    ring_of_power: {
        name: '力量之戒',
        icon: '💍',
        type: 'accessory',
        rarity: 'uncommon',
        shape: 'single',
        attack: 10,
        defense: 0,
        hp: 0,
        price: 6,
        description: '增加攻擊力的魔法戒指'
    },
    amulet_of_protection: {
        name: '守護護符',
        icon: '📿',
        type: 'accessory',
        rarity: 'uncommon',
        shape: 'single',
        attack: 0,
        defense: 10,
        hp: 15,
        price: 6,
        description: '提供額外防護的護符'
    },
    crown_of_kings: {
        name: '王者之冠',
        icon: '👑',
        type: 'accessory',
        rarity: 'legendary',
        shape: 'horizontal_3',
        attack: 20,
        defense: 20,
        hp: 40,
        price: 25,
        description: '傳說中的王者頭冠'
    },
    lucky_coin: {
        name: '幸運硬幣',
        icon: '🪙',
        type: 'accessory',
        rarity: 'common',
        shape: 'single',
        attack: 3,
        defense: 3,
        hp: 5,
        price: 3,
        description: '帶來一點好運'
    },

    // ===== 藥水 =====
    health_potion: {
        name: '生命藥水',
        icon: '🧪',
        type: 'consumable',
        rarity: 'common',
        shape: 'single',
        attack: 0,
        defense: 0,
        hp: 30,
        price: 4,
        description: '恢復生命值的藥水'
    },
    attack_elixir: {
        name: '力量藥劑',
        icon: '⚗️',
        type: 'consumable',
        rarity: 'uncommon',
        shape: 'vertical_2',
        attack: 15,
        defense: 0,
        hp: 0,
        price: 5,
        description: '提升攻擊力的藥劑'
    },
    giant_potion: {
        name: '巨人藥水',
        icon: '🍶',
        type: 'consumable',
        rarity: 'rare',
        shape: 'L_shape',
        attack: 10,
        defense: 10,
        hp: 25,
        price: 10,
        description: '讓你變得強大的神奇藥水'
    },

    // ===== 特殊 =====
    lucky_clover: {
        name: '幸運四葉草',
        icon: '🍀',
        type: 'special',
        rarity: 'rare',
        shape: 'square',
        attack: 8,
        defense: 8,
        hp: 15,
        price: 10,
        description: '帶來好運的四葉草'
    },
    phoenix_feather: {
        name: '鳳凰羽毛',
        icon: '🪶',
        type: 'special',
        rarity: 'epic',
        shape: 'S_shape',
        attack: 18,
        defense: 12,
        hp: 25,
        price: 16,
        description: '來自傳說鳳凰的羽毛'
    },
    magic_stone: {
        name: '魔法石',
        icon: '💎',
        type: 'special',
        rarity: 'rare',
        shape: 'single',
        attack: 8,
        defense: 8,
        hp: 10,
        price: 8,
        description: '蘊含魔力的寶石'
    },
    heart_crystal: {
        name: '心之水晶',
        icon: '❤️',
        type: 'special',
        rarity: 'epic',
        shape: 'horizontal_2',
        attack: 0,
        defense: 5,
        hp: 50,
        price: 12,
        description: '大幅提升生命值'
    },

    // ===== 食物 =====
    bread: {
        name: '麵包',
        icon: '🍞',
        type: 'food',
        rarity: 'common',
        shape: 'horizontal_2',
        attack: 0,
        defense: 0,
        hp: 15,
        price: 2,
        description: '普通的麵包，恢復少量生命'
    },
    meat: {
        name: '烤肉',
        icon: '🍖',
        type: 'food',
        rarity: 'common',
        shape: 'L_shape_90',
        attack: 3,
        defense: 0,
        hp: 20,
        price: 3,
        description: '美味的烤肉'
    },
    golden_apple: {
        name: '金蘋果',
        icon: '🍎',
        type: 'food',
        rarity: 'epic',
        shape: 'single',
        attack: 5,
        defense: 5,
        hp: 35,
        price: 12,
        description: '傳說中的金蘋果'
    },

    // ===== 2x3 長方形道具 =====
    ancient_tome: {
        name: '遠古典籍',
        icon: '📖',
        type: 'weapon',
        rarity: 'rare',
        shape: 'rect_2x3',
        attack: 22,
        defense: 5,
        hp: 15,
        price: 14,
        description: '記載著古老魔法的巨大書冊'
    },
    holy_shield: {
        name: '聖光之盾',
        icon: '🛡️',
        type: 'shield',
        rarity: 'epic',
        shape: 'rect_2x3',
        attack: 0,
        defense: 35,
        hp: 40,
        price: 20,
        description: '受到神聖祝福的巨盾'
    },
    war_banner: {
        name: '戰旗',
        icon: '🚩',
        type: 'special',
        rarity: 'rare',
        shape: 'rect_3x2',
        attack: 15,
        defense: 10,
        hp: 20,
        price: 13,
        description: '鼓舞士氣的戰鬥旗幟'
    },
    treasure_chest: {
        name: '寶箱',
        icon: '📦',
        type: 'special',
        rarity: 'epic',
        shape: 'rect_3x2',
        attack: 10,
        defense: 15,
        hp: 30,
        price: 18,
        description: '裝滿寶物的神秘箱子'
    },

    // ===== 閃電型道具 =====
    lightning_rod: {
        name: '引雷杖',
        icon: '⚡',
        type: 'weapon',
        rarity: 'rare',
        shape: 'lightning',
        attack: 28,
        defense: 0,
        hp: 10,
        price: 15,
        description: '可以召喚雷電的魔杖'
    },
    serpent_blade: {
        name: '蛇形劍',
        icon: '🐍',
        type: 'weapon',
        rarity: 'epic',
        shape: 'lightning_flip',
        attack: 32,
        defense: 5,
        hp: 0,
        price: 17,
        description: '形如毒蛇的彎曲利刃'
    },
    storm_caller: {
        name: '風暴呼喚者',
        icon: '🌩️',
        type: 'weapon',
        rarity: 'legendary',
        shape: 'big_lightning',
        attack: 45,
        defense: 8,
        hp: 20,
        price: 28,
        description: '能夠召喚暴風雨的傳說法器'
    },
    dragon_spine: {
        name: '龍脊骨',
        icon: '🦴',
        type: 'special',
        rarity: 'epic',
        shape: 'lightning',
        attack: 20,
        defense: 18,
        hp: 25,
        price: 19,
        description: '來自遠古巨龍的脊椎骨'
    }
};

// ==================== 遊戲狀態 ====================

let gameState = {
    selectedClass: null,
    playerClass: null,
    gold: 10,
    round: 1,
    maxRounds: 21,
    backpackRows: 3,
    backpackCols: 4,
    backpack: [],
    placedItems: [],
    inventory: [],
    shopItems: [],
    playerStats: {
        maxHp: 100,
        currentHp: 100,
        attack: 0,
        defense: 0
    },
    prepTimer: null,
    prepTimeLeft: 45,
    draggedItem: null,
    draggedItemIndex: null
};

// ==================== DOM 元素 ====================

const screens = {
    mainMenu: document.getElementById('main-menu'),
    preparation: document.getElementById('preparation-phase'),
    battle: document.getElementById('battle-phase'),
    result: document.getElementById('battle-result')
};

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', () => {
    initMainMenu();
    initEventListeners();
});

function initMainMenu() {
    const classCards = document.querySelectorAll('.class-card');
    const startBtn = document.getElementById('start-game-btn');

    classCards.forEach(card => {
        card.addEventListener('click', () => {
            classCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            gameState.selectedClass = card.dataset.class;
            startBtn.disabled = false;
        });
    });

    startBtn.addEventListener('click', startGame);
}

function initBackpackGrid() {
    const grid = document.getElementById('backpack-grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gameState.backpackCols}, 55px)`;

    gameState.backpack = [];
    for (let row = 0; row < gameState.backpackRows; row++) {
        gameState.backpack[row] = [];
        for (let col = 0; col < gameState.backpackCols; col++) {
            gameState.backpack[row][col] = null;

            const slot = document.createElement('div');
            slot.className = 'backpack-slot';
            slot.dataset.row = row;
            slot.dataset.col = col;

            slot.addEventListener('dragover', handleDragOver);
            slot.addEventListener('dragleave', handleDragLeave);
            slot.addEventListener('drop', handleDrop);
            slot.addEventListener('click', () => handleSlotClick(row, col));

            grid.appendChild(slot);
        }
    }

    gameState.placedItems = [];
    updateBackpackSizeDisplay();
}

function initEventListeners() {
    document.getElementById('refresh-shop').addEventListener('click', refreshShop);
    document.getElementById('ready-battle-btn').addEventListener('click', startBattle);
    document.getElementById('continue-btn').addEventListener('click', continueToNextRound);
    document.getElementById('game-over-btn').addEventListener('click', restartGame);

    // R 鍵旋轉
    document.addEventListener('keydown', (e) => {
        if ((e.key === 'r' || e.key === 'R') && gameState.draggedItemIndex !== null) {
            rotateInventoryItem(gameState.draggedItemIndex);
        }
    });
}

// ==================== 畫面切換 ====================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// ==================== 遊戲開始 ====================

function startGame() {
    gameState.playerClass = CLASSES[gameState.selectedClass];
    gameState.playerStats.maxHp = gameState.playerClass.baseHp;
    gameState.playerStats.currentHp = gameState.playerClass.baseHp;
    gameState.gold = 10;
    gameState.round = 1;
    gameState.backpackRows = gameState.playerClass.startingRows;
    gameState.backpackCols = gameState.playerClass.startingCols;
    gameState.inventory = [];
    gameState.placedItems = [];

    document.querySelector('.player-class').textContent =
        `${gameState.playerClass.icon} ${gameState.playerClass.name}`;

    initBackpackGrid();
    showScreen('preparation');
    startPreparationPhase();
}

// ==================== 準備階段 ====================

function startPreparationPhase() {
    updateUI();
    generateShopItems();
    startPrepTimer();
    checkBackpackUpgrade();
}

function checkBackpackUpgrade() {
    const upgradeBtn = document.getElementById('upgrade-backpack-btn');

    // 每3回合可以擴充背包
    if (gameState.round > 1 && gameState.round % 3 === 1) {
        const totalSlots = gameState.backpackRows * gameState.backpackCols;
        if (totalSlots < 30) {
            const cost = 5 + Math.floor(gameState.round / 2);
            upgradeBtn.textContent = `📦 擴充背包 (${cost}💰)`;
            upgradeBtn.style.display = 'block';
            upgradeBtn.onclick = () => upgradeBackpack(cost);
            return;
        }
    }
    upgradeBtn.style.display = 'none';
}

function upgradeBackpack(cost) {
    if (gameState.gold < cost) {
        showMessage(`金幣不足！擴充需要 ${cost} 金幣`, 'error');
        return;
    }

    gameState.gold -= cost;

    // 交替增加行和列
    if (gameState.backpackCols <= gameState.backpackRows && gameState.backpackCols < 6) {
        gameState.backpackCols++;
    } else if (gameState.backpackRows < 5) {
        gameState.backpackRows++;
    } else if (gameState.backpackCols < 6) {
        gameState.backpackCols++;
    }

    const existingItems = [...gameState.placedItems];
    initBackpackGrid();

    // 重新放置物品
    existingItems.forEach(placedItem => {
        if (canPlaceItem(placedItem.shape, placedItem.row, placedItem.col)) {
            placeItemOnGrid(placedItem.item, placedItem.row, placedItem.col, placedItem.shape);
        } else {
            gameState.inventory.push({ ...placedItem.item });
        }
    });

    updateUI();
    updateBackpackDisplay();
    renderInventory();
    calculateStats();

    document.getElementById('upgrade-backpack-btn').style.display = 'none';
    showMessage(`背包擴充為 ${gameState.backpackCols}x${gameState.backpackRows}！`, 'success');
}

function updateBackpackSizeDisplay() {
    const sizeDisplay = document.getElementById('backpack-size');
    if (sizeDisplay) {
        sizeDisplay.textContent = `${gameState.backpackCols}x${gameState.backpackRows}`;
    }
}

function startPrepTimer() {
    gameState.prepTimeLeft = 45;
    updatePrepTimer();

    if (gameState.prepTimer) clearInterval(gameState.prepTimer);

    gameState.prepTimer = setInterval(() => {
        gameState.prepTimeLeft--;
        updatePrepTimer();

        if (gameState.prepTimeLeft <= 0) {
            clearInterval(gameState.prepTimer);
            startBattle();
        }
    }, 1000);
}

function updatePrepTimer() {
    document.getElementById('prep-timer').textContent = gameState.prepTimeLeft;
}

function generateShopItems() {
    const shopContainer = document.getElementById('shop-items');
    shopContainer.innerHTML = '';
    gameState.shopItems = [];

    const itemPool = getItemPoolForRound(gameState.round);

    for (let i = 0; i < 5; i++) {
        const itemId = itemPool[Math.floor(Math.random() * itemPool.length)];
        const item = { ...ITEMS[itemId], id: itemId, sold: false, rotation: 0 };
        gameState.shopItems.push(item);

        const itemElement = createShopItemElement(item, i);
        shopContainer.appendChild(itemElement);
    }
}

function getItemPoolForRound(round) {
    const allItems = Object.keys(ITEMS);

    // 稀有度回合限制：藍色(rare)3回合、紫色(epic)6回合、橙色(legendary)9回合
    const rarityUnlockRound = {
        common: 1,
        uncommon: 1,
        rare: 3,
        epic: 6,
        legendary: 9
    };

    // 稀有度權重（隨回合調整）
    const weights = {
        common: round <= 3 ? 50 : (round <= 6 ? 35 : 20),
        uncommon: round <= 3 ? 50 : 40,
        rare: round >= 3 ? (round <= 6 ? 30 : 25) : 0,
        epic: round >= 6 ? (round <= 8 ? 15 : 12) : 0,
        legendary: round >= 9 ? 8 : 0
    };

    const pool = [];
    allItems.forEach(itemId => {
        const item = ITEMS[itemId];
        // 檢查是否達到解鎖回合
        if (round >= rarityUnlockRound[item.rarity]) {
            const weight = weights[item.rarity] || 0;
            for (let i = 0; i < weight; i++) {
                pool.push(itemId);
            }
        }
    });

    return pool;
}

function createShopItemElement(item, index) {
    const div = document.createElement('div');
    div.className = `shop-item rarity-${item.rarity}`;
    div.dataset.index = index;

    const shape = SHAPES[item.shape];

    let statsText = [];
    if (item.attack > 0) statsText.push(`⚔️+${item.attack}`);
    if (item.defense > 0) statsText.push(`🛡️+${item.defense}`);
    if (item.hp > 0) statsText.push(`❤️+${item.hp}`);

    div.innerHTML = `
        <div class="shop-item-header">
            <span class="shop-item-name">
                <span class="item-icon">${item.icon}</span>
                <span class="rarity-${item.rarity}">${item.name}</span>
            </span>
            <span class="shop-item-price">💰${item.price}</span>
        </div>
        <div class="shop-item-body">
            <div class="shape-preview">
                ${createShapePreview(shape)}
            </div>
            <div class="shop-item-info">
                <div class="shop-item-stats">${statsText.join(' ')}</div>
                <div class="shop-item-size">📐 ${shape.length}格</div>
            </div>
        </div>
    `;

    div.addEventListener('click', () => buyItem(index));
    div.addEventListener('mouseenter', (e) => showTooltip(item, e));
    div.addEventListener('mouseleave', hideTooltip);

    return div;
}

function createShapePreview(shape) {
    const maxRow = Math.max(...shape.map(s => s[1])) + 1;
    const maxCol = Math.max(...shape.map(s => s[0])) + 1;

    let html = `<div class="shape-grid" style="grid-template-columns: repeat(${maxCol}, 12px);">`;

    for (let row = 0; row < maxRow; row++) {
        for (let col = 0; col < maxCol; col++) {
            const isOccupied = shape.some(s => s[0] === col && s[1] === row);
            html += `<div class="shape-cell ${isOccupied ? 'filled' : ''}"></div>`;
        }
    }

    html += '</div>';
    return html;
}

function buyItem(index) {
    const item = gameState.shopItems[index];

    if (item.sold) return;
    if (gameState.gold < item.price) {
        showMessage('金幣不足！', 'error');
        return;
    }

    gameState.gold -= item.price;
    item.sold = true;

    gameState.inventory.push({ ...item, rotation: 0 });

    updateUI();
    renderInventory();

    const shopItems = document.querySelectorAll('.shop-item');
    shopItems[index].classList.add('sold');

    showMessage(`購買了 ${item.name}！`, 'success');
}

function refreshShop() {
    if (gameState.gold < 2) {
        showMessage('金幣不足！刷新需要 2 金幣', 'error');
        return;
    }

    gameState.gold -= 2;
    updateUI();
    generateShopItems();
}

// ==================== 物品欄與背包 ====================

function renderInventory() {
    const container = document.getElementById('inventory-items');
    container.innerHTML = '';

    if (gameState.inventory.length === 0) {
        container.innerHTML = '<div class="inventory-empty">購買物品後會顯示在這裡<br>拖放到背包中使用</div>';
        return;
    }

    gameState.inventory.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `inventory-item rarity-${item.rarity}`;
        div.draggable = true;
        div.dataset.index = index;

        const shape = getRotatedShape(SHAPES[item.shape], item.rotation || 0);

        let statsText = [];
        if (item.attack > 0) statsText.push(`⚔️+${item.attack}`);
        if (item.defense > 0) statsText.push(`🛡️+${item.defense}`);
        if (item.hp > 0) statsText.push(`❤️+${item.hp}`);

        const sellPrice = Math.floor(item.price / 2);

        div.innerHTML = `
            <div class="inventory-item-main">
                <span class="inventory-item-icon">${item.icon}</span>
                <div class="inventory-item-info">
                    <div class="inventory-item-name rarity-${item.rarity}">${item.name}</div>
                    <div class="inventory-item-stats">${statsText.join(' ')}</div>
                </div>
            </div>
            <div class="inventory-item-shape">
                ${createShapePreview(shape)}
            </div>
            <div class="inventory-item-buttons">
                <button class="rotate-btn" title="旋轉 (R)">🔄</button>
                <button class="sell-btn" title="出售">💰${sellPrice}</button>
            </div>
        `;

        div.querySelector('.rotate-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            rotateInventoryItem(index);
        });

        div.querySelector('.sell-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            sellInventoryItem(index);
        });

        div.addEventListener('dragstart', (e) => handleDragStart(e, index));
        div.addEventListener('dragend', handleDragEnd);
        div.addEventListener('mouseenter', (e) => showTooltip(item, e));
        div.addEventListener('mouseleave', hideTooltip);

        container.appendChild(div);
    });
}

function rotateInventoryItem(index) {
    const item = gameState.inventory[index];
    if (item) {
        item.rotation = ((item.rotation || 0) + 90) % 360;
        renderInventory();
    }
}

function sellInventoryItem(index) {
    const item = gameState.inventory[index];
    if (item) {
        const sellPrice = Math.floor(item.price / 2);
        gameState.gold += sellPrice;
        gameState.inventory.splice(index, 1);

        hideTooltip();
        updateUI();
        renderInventory();
        showMessage(`賣出 ${item.name}，獲得 ${sellPrice} 金幣！`, 'success');
    }
}

function getRotatedShape(shape, rotation) {
    if (!rotation || rotation === 0) return shape;

    let rotated = shape.map(s => [...s]);
    const times = rotation / 90;

    for (let t = 0; t < times; t++) {
        rotated = rotated.map(([x, y]) => [y, -x]);
        const minX = Math.min(...rotated.map(s => s[0]));
        const minY = Math.min(...rotated.map(s => s[1]));
        rotated = rotated.map(([x, y]) => [x - minX, y - minY]);
    }

    return rotated;
}

function handleDragStart(e, index) {
    gameState.draggedItem = gameState.inventory[index];
    gameState.draggedItemIndex = index;
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', index);
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    clearHighlights();
    hideTooltip(); // 拖放結束時隱藏提示框
    gameState.draggedItem = null;
    gameState.draggedItemIndex = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const slot = e.target.closest('.backpack-slot');
    if (!slot) return;

    const row = parseInt(slot.dataset.row);
    const col = parseInt(slot.dataset.col);

    if (gameState.draggedItem) {
        highlightPlacement(row, col, gameState.draggedItem);
    }
}

function handleDragLeave(e) {
    // 不立即清除，避免閃爍
}

function handleDrop(e) {
    e.preventDefault();
    clearHighlights();

    const slot = e.target.closest('.backpack-slot');
    if (!slot) return;

    const row = parseInt(slot.dataset.row);
    const col = parseInt(slot.dataset.col);
    const itemIndex = parseInt(e.dataTransfer.getData('text/plain'));

    const item = gameState.inventory[itemIndex];
    if (!item) return;

    const shape = getRotatedShape(SHAPES[item.shape], item.rotation || 0);

    if (canPlaceItem(shape, row, col)) {
        gameState.inventory.splice(itemIndex, 1);
        placeItemOnGrid(item, row, col, shape);

        hideTooltip(); // 放置物品後隱藏提示框
        updateBackpackDisplay();
        renderInventory();
        calculateStats();

        showMessage(`${item.name} 已放置！`, 'success');
    } else {
        showMessage('無法放置在此位置！', 'error');
    }
}

function canPlaceItem(shape, startRow, startCol) {
    for (const [dx, dy] of shape) {
        const newRow = startRow + dy;
        const newCol = startCol + dx;

        if (newRow < 0 || newRow >= gameState.backpackRows ||
            newCol < 0 || newCol >= gameState.backpackCols) {
            return false;
        }

        if (gameState.backpack[newRow][newCol] !== null) {
            return false;
        }
    }
    return true;
}

function placeItemOnGrid(item, startRow, startCol, shape) {
    const placedItem = {
        item: item,
        row: startRow,
        col: startCol,
        shape: shape,
        cells: []
    };

    for (const [dx, dy] of shape) {
        const r = startRow + dy;
        const c = startCol + dx;
        gameState.backpack[r][c] = placedItem;
        placedItem.cells.push({ row: r, col: c });
    }

    gameState.placedItems.push(placedItem);
}

function highlightPlacement(row, col, item) {
    clearHighlights();

    const shape = getRotatedShape(SHAPES[item.shape], item.rotation || 0);
    const canPlace = canPlaceItem(shape, row, col);

    for (const [dx, dy] of shape) {
        const r = row + dy;
        const c = col + dx;

        if (r >= 0 && r < gameState.backpackRows &&
            c >= 0 && c < gameState.backpackCols) {
            const slot = document.querySelector(`.backpack-slot[data-row="${r}"][data-col="${c}"]`);
            if (slot) {
                slot.classList.add(canPlace ? 'highlight-valid' : 'highlight-invalid');
            }
        }
    }
}

function clearHighlights() {
    document.querySelectorAll('.backpack-slot').forEach(slot => {
        slot.classList.remove('highlight-valid', 'highlight-invalid');
    });
}

function handleSlotClick(row, col) {
    const cell = gameState.backpack[row][col];
    if (cell && cell.item) {
        removeItemFromGrid(cell);
    }
}

function removeItemFromGrid(placedItem) {
    for (const cell of placedItem.cells) {
        gameState.backpack[cell.row][cell.col] = null;
    }

    const index = gameState.placedItems.indexOf(placedItem);
    if (index > -1) {
        gameState.placedItems.splice(index, 1);
    }

    gameState.inventory.push({ ...placedItem.item, rotation: 0 });

    updateBackpackDisplay();
    renderInventory();
    calculateStats();
}

function updateBackpackDisplay() {
    const slots = document.querySelectorAll('.backpack-slot');

    // 為每個 placedItem 產生唯一識別碼
    gameState.placedItems.forEach((placedItem, idx) => {
        placedItem.itemId = idx;
    });

    slots.forEach(slot => {
        const row = parseInt(slot.dataset.row);
        const col = parseInt(slot.dataset.col);
        const cell = gameState.backpack[row][col];

        slot.innerHTML = '';
        slot.className = 'backpack-slot';
        slot.removeAttribute('data-item-id');

        if (cell && cell.item) {
            // 每個格子都顯示圖示，避免圖示丟失
            slot.innerHTML = `<span class="slot-icon">${cell.item.icon}</span>`;
            slot.classList.add('occupied', `rarity-${cell.item.rarity}`);
            slot.title = cell.item.name;
            // 加入物品ID用於視覺區隔
            slot.dataset.itemId = cell.itemId;
        }
    });
}

function calculateStats() {
    let totalAttack = 0;
    let totalDefense = 0;
    let totalHp = 0;

    gameState.placedItems.forEach(placedItem => {
        totalAttack += placedItem.item.attack;
        totalDefense += placedItem.item.defense;
        totalHp += placedItem.item.hp;
    });

    // 套用職業加成
    totalAttack = Math.floor(totalAttack * gameState.playerClass.attackBonus);
    totalDefense = Math.floor(totalDefense * gameState.playerClass.defenseBonus);
    totalHp = Math.floor((gameState.playerClass.baseHp + totalHp) * gameState.playerClass.hpBonus);

    gameState.playerStats.attack = totalAttack;
    gameState.playerStats.defense = totalDefense;
    gameState.playerStats.maxHp = totalHp;
    gameState.playerStats.currentHp = totalHp;

    document.getElementById('total-attack').textContent = totalAttack;
    document.getElementById('total-defense').textContent = totalDefense;
    document.getElementById('total-hp').textContent = totalHp;
}

// ==================== 戰鬥系統 ====================

function startBattle() {
    if (gameState.prepTimer) clearInterval(gameState.prepTimer);

    calculateStats();

    const enemy = generateEnemy();

    showScreen('battle');
    document.getElementById('battle-round').textContent = gameState.round;

    renderBattleBackpack('player-battle-backpack', gameState.placedItems, gameState.backpackRows, gameState.backpackCols);
    renderBattleBackpack('enemy-battle-backpack', enemy.placedItems, enemy.rows, enemy.cols);

    updateBattleStats(enemy);
    runBattle(enemy);
}

function generateEnemy() {
    const rows = Math.min(3 + Math.floor(gameState.round / 4), 5);
    const cols = Math.min(4 + Math.floor(gameState.round / 5), 6);

    // 敵人數值平衡：第一回合較弱，隨回合緩慢成長
    const baseStats = {
        maxHp: 45 + gameState.round * 12,
        currentHp: 45 + gameState.round * 12,
        attack: 3 + gameState.round * 2,
        defense: 1 + Math.floor(gameState.round * 1.2),
        rows: rows,
        cols: cols
    };

    const enemyBackpack = [];
    for (let r = 0; r < rows; r++) {
        enemyBackpack[r] = [];
        for (let c = 0; c < cols; c++) {
            enemyBackpack[r][c] = null;
        }
    }

    const placedItems = [];
    // 敵人物品數量：第一回合1~2件，之後緩慢增加
    const numItems = Math.min(Math.max(1, Math.floor(gameState.round / 2) + 1), 6);
    const itemPool = getItemPoolForRound(Math.max(1, gameState.round - 2));

    for (let i = 0; i < numItems; i++) {
        const itemId = itemPool[Math.floor(Math.random() * itemPool.length)];
        const item = { ...ITEMS[itemId], id: itemId };
        const shape = SHAPES[item.shape];

        let placed = false;
        for (let attempt = 0; attempt < 50 && !placed; attempt++) {
            const startRow = Math.floor(Math.random() * rows);
            const startCol = Math.floor(Math.random() * cols);

            if (canPlaceItemEnemy(enemyBackpack, shape, startRow, startCol, rows, cols)) {
                const placedItem = {
                    item: item,
                    row: startRow,
                    col: startCol,
                    shape: shape,
                    cells: []
                };

                for (const [dx, dy] of shape) {
                    const r = startRow + dy;
                    const c = startCol + dx;
                    enemyBackpack[r][c] = placedItem;
                    placedItem.cells.push({ row: r, col: c });
                }

                placedItems.push(placedItem);
                baseStats.attack += item.attack;
                baseStats.defense += item.defense;
                baseStats.maxHp += item.hp;
                baseStats.currentHp += item.hp;
                placed = true;
            }
        }
    }

    return { ...baseStats, backpack: enemyBackpack, placedItems: placedItems };
}

function canPlaceItemEnemy(backpack, shape, startRow, startCol, rows, cols) {
    for (const [dx, dy] of shape) {
        const newRow = startRow + dy;
        const newCol = startCol + dx;

        if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
            return false;
        }
        if (backpack[newRow][newCol] !== null) {
            return false;
        }
    }
    return true;
}

function renderBattleBackpack(containerId, placedItems, rows, cols) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${cols}, 30px)`;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const slot = document.createElement('div');
            slot.className = 'mini-slot';

            const item = placedItems.find(p =>
                p.cells.some(cell => cell.row === r && cell.col === c)
            );

            if (item) {
                slot.classList.add(`rarity-${item.item.rarity}`);
                if (item.row === r && item.col === c) {
                    slot.textContent = item.item.icon;
                }
            }

            container.appendChild(slot);
        }
    }
}

function updateBattleStats(enemy) {
    document.getElementById('player-hp-text').textContent =
        `${gameState.playerStats.currentHp}/${gameState.playerStats.maxHp}`;
    document.getElementById('player-battle-atk').textContent = gameState.playerStats.attack;
    document.getElementById('player-battle-def').textContent = gameState.playerStats.defense;

    document.getElementById('enemy-hp-text').textContent =
        `${enemy.currentHp}/${enemy.maxHp}`;
    document.getElementById('enemy-battle-atk').textContent = enemy.attack;
    document.getElementById('enemy-battle-def').textContent = enemy.defense;
}

async function runBattle(enemy) {
    const logContent = document.getElementById('battle-log-content');
    logContent.innerHTML = '';

    let playerHp = gameState.playerStats.currentHp;
    let enemyHp = enemy.currentHp;
    let turn = 1;

    addLogEntry(logContent, `⚔️ 戰鬥開始！`, 'log-special');
    addLogEntry(logContent, `你的背包: ${gameState.placedItems.length}件物品`, 'log-info');
    addLogEntry(logContent, `敵人背包: ${enemy.placedItems.length}件物品`, 'log-info');

    while (playerHp > 0 && enemyHp > 0) {
        await delay(800);

        const playerDamage = calculateDamage(gameState.playerStats.attack, enemy.defense);
        enemyHp -= playerDamage;

        addLogEntry(logContent, `回合 ${turn}: 你造成 ${playerDamage} 點傷害！`, 'log-player-action');
        updateHealthBars(playerHp, gameState.playerStats.maxHp, Math.max(0, enemyHp), enemy.maxHp);

        document.querySelector('.enemy-side').classList.add('shake');
        setTimeout(() => document.querySelector('.enemy-side').classList.remove('shake'), 400);

        if (enemyHp <= 0) break;

        await delay(600);

        const enemyDamage = calculateDamage(enemy.attack, gameState.playerStats.defense);
        playerHp -= enemyDamage;

        addLogEntry(logContent, `回合 ${turn}: 敵人造成 ${enemyDamage} 點傷害！`, 'log-enemy-action');
        updateHealthBars(Math.max(0, playerHp), gameState.playerStats.maxHp, Math.max(0, enemyHp), enemy.maxHp);

        document.querySelector('.player-side').classList.add('shake');
        setTimeout(() => document.querySelector('.player-side').classList.remove('shake'), 400);

        turn++;
    }

    await delay(1000);
    showBattleResult(playerHp > 0);
}

function calculateDamage(attack, defense) {
    const baseDamage = Math.max(1, attack - defense * 0.5);
    const variance = baseDamage * 0.2;
    return Math.floor(baseDamage + (Math.random() * variance * 2 - variance));
}

function updateHealthBars(playerHp, playerMaxHp, enemyHp, enemyMaxHp) {
    document.querySelector('.player-health').style.width = `${(playerHp / playerMaxHp) * 100}%`;
    document.querySelector('.enemy-health').style.width = `${(enemyHp / enemyMaxHp) * 100}%`;
    document.getElementById('player-hp-text').textContent = `${Math.max(0, playerHp)}/${playerMaxHp}`;
    document.getElementById('enemy-hp-text').textContent = `${Math.max(0, enemyHp)}/${enemyMaxHp}`;
}

function addLogEntry(container, text, className) {
    const entry = document.createElement('div');
    entry.className = `log-entry ${className}`;
    entry.textContent = text;
    container.appendChild(entry);
    container.scrollTop = container.scrollHeight;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==================== 結果 ====================

function showBattleResult(victory) {
    const resultContent = document.querySelector('.result-content');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const rewardGold = document.getElementById('reward-gold');
    const continueBtn = document.getElementById('continue-btn');
    const gameOverBtn = document.getElementById('game-over-btn');

    resultContent.classList.remove('victory', 'defeat');

    if (victory) {
        resultContent.classList.add('victory');
        resultTitle.textContent = '🎉 勝利！';

        const goldReward = 5 + gameState.round * 3;
        gameState.gold += goldReward;
        rewardGold.textContent = goldReward;

        if (gameState.round >= gameState.maxRounds) {
            resultMessage.textContent = '🏆 恭喜！你完成了所有回合，成為背包大師！';
            continueBtn.style.display = 'none';
            gameOverBtn.style.display = 'inline-block';
            gameOverBtn.textContent = '🏆 返回主選單';
        } else {
            const nextUpgrade = 3 - (gameState.round % 3);
            resultMessage.textContent = nextUpgrade === 3
                ? '下回合可以擴充背包！'
                : `還有 ${nextUpgrade} 回合可擴充背包`;
            continueBtn.style.display = 'inline-block';
            gameOverBtn.style.display = 'none';
        }
    } else {
        resultContent.classList.add('defeat');
        resultTitle.textContent = '💀 失敗...';
        resultMessage.textContent = '你被擊敗了！再試一次吧！';
        rewardGold.textContent = '0';
        continueBtn.style.display = 'none';
        gameOverBtn.style.display = 'inline-block';
        gameOverBtn.textContent = '重新開始';
    }

    showScreen('result');
}

function continueToNextRound() {
    gameState.round++;
    gameState.playerStats.currentHp = gameState.playerStats.maxHp;
    document.getElementById('round-number').textContent = gameState.round;
    showScreen('preparation');
    startPreparationPhase();
}

function restartGame() {
    gameState = {
        selectedClass: null,
        playerClass: null,
        gold: 10,
        round: 1,
        maxRounds: 21,
        backpackRows: 3,
        backpackCols: 4,
        backpack: [],
        placedItems: [],
        inventory: [],
        shopItems: [],
        playerStats: { maxHp: 100, currentHp: 100, attack: 0, defense: 0 },
        prepTimer: null,
        prepTimeLeft: 45,
        draggedItem: null,
        draggedItemIndex: null
    };

    document.querySelectorAll('.class-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('start-game-btn').disabled = true;
    showScreen('mainMenu');
}

// ==================== UI ====================

function updateUI() {
    document.getElementById('gold-amount').textContent = gameState.gold;
    document.getElementById('round-number').textContent = gameState.round;
    updateBackpackSizeDisplay();
}

function showMessage(text, type) {
    const messageEl = document.getElementById('game-message');
    if (messageEl) {
        messageEl.textContent = text;
        messageEl.className = `game-message ${type}`;
        messageEl.classList.add('show');
        setTimeout(() => messageEl.classList.remove('show'), 2000);
    }
}

function showTooltip(item, event) {
    const tooltip = document.getElementById('item-tooltip');
    const shape = SHAPES[item.shape];

    document.getElementById('tooltip-name').textContent = item.name;
    document.getElementById('tooltip-name').className = `rarity-${item.rarity}`;
    document.getElementById('tooltip-desc').textContent = item.description;

    let statsHtml = [];
    if (item.attack > 0) statsHtml.push(`⚔️ 攻擊: +${item.attack}`);
    if (item.defense > 0) statsHtml.push(`🛡️ 防禦: +${item.defense}`);
    if (item.hp > 0) statsHtml.push(`❤️ 生命: +${item.hp}`);
    statsHtml.push(`📐 佔用: ${shape.length}格`);
    document.getElementById('tooltip-stats').innerHTML = statsHtml.join('<br>');

    tooltip.classList.remove('hidden');
    tooltip.style.left = `${Math.min(event.pageX + 15, window.innerWidth - 270)}px`;
    tooltip.style.top = `${Math.min(event.pageY + 15, window.innerHeight - 180)}px`;
}

function hideTooltip() {
    document.getElementById('item-tooltip').classList.add('hidden');
}
