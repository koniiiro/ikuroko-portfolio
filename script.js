// 代替案の表示/非表示を切り替える関数
function showAlternatives(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove('hidden');
        // スムーズにスクロール
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

function hideAlternatives(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('hidden');
    }
}

// ページ読み込み時のアニメーション（オプション）
document.addEventListener('DOMContentLoaded', function() {
    // カードにホバー効果を追加する場合などの追加処理
    console.log('Portfolio loaded successfully');
});
