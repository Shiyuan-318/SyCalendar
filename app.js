// ==================== LUNAR CALENDAR DATA ====================
const lunarInfo = new Array(
    0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
    0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
    0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
    0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
    0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
    0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
    0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
    0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,
    0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
    0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x05ac0,0x0ab60,0x096d5,0x092e0,
    0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
    0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
    0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
    0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
    0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
    0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,
    0x092e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,
    0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,
    0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,
    0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a4d0,0x0d150,0x0f252,
    0x0d520
);

// ==================== CONSTANTS ====================
const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月',
                   '七月', '八月', '九月', '十月', '十一月', '十二月'];
const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const weekDaysShort = ['日', '一', '二', '三', '四', '五', '六'];
const lunarMonths = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
const lunarDays = ['','初一','初二','初三','初四','初五','初六','初七','初八','初九','初十',
                  '十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',
                  '廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];

const tianGan = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const diZhi = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const shengXiao = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];

const holidaysLunar = {
    '0101': '春节', '0115': '元宵节', '0505': '端午节', '0707': '七夕',
    '0715': '中元节', '0815': '中秋节', '0909': '重阳节', '1208': '腊八节', '1230': '除夕',
};

const holidaysSolar = {
    '0101': '元旦', '0214': '情人节', '0308': '妇女节', '0312': '植树节',
    '0401': '愚人节', '0501': '劳动节', '0504': '青年节', '0601': '儿童节',
    '0701': '建党节', '0801': '建军节', '0910': '教师节', '1001': '国庆节',
    '1031': '万圣节', '1225': '圣诞节',
};

// ==================== STATE ====================
let currentDate = new Date();
let selectedDate = new Date();
let currentView = 'month';
let viewYear = currentDate.getFullYear();
let viewMonth = currentDate.getMonth();
let events = [];
let editingEventId = null;

// ==================== LUNAR CALCULATION ====================
function lunarYearDays(y) {
    let sum = 348;
    for (let i = 0x8000; i > 0x8; i >>= 1) {
        sum += (lunarInfo[y] & i) ? 1 : 0;
    }
    return sum + leapDays(y);
}

function leapMonth(y) {
    return lunarInfo[y] & 0xf;
}

function leapDays(y) {
    if (leapMonth(y)) {
        return (lunarInfo[y] & 0x10000) ? 30 : 29;
    }
    return 0;
}

function monthDays(y, m) {
    return (lunarInfo[y] & (0x10000 >> m)) ? 30 : 29;
}

function solarToLunar(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let offset = 0;
    for (let y = 1900; y < year; y++) {
        offset += (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 366 : 365;
    }
    const monthDaysArr = [31, ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let m = 1; m < month; m++) {
        offset += monthDaysArr[m - 1];
    }
    offset += day - 1;

    let lunarY = 1900;
    let lunarTotal = 0;
    for (let idx = 0; idx < 201; idx++) {
        const daysInYear = lunarYearDays(idx);
        if (offset < lunarTotal + daysInYear) break;
        lunarTotal += daysInYear;
        lunarY++;
    }

    const idx = lunarY - 1900;
    const leap = leapMonth(idx);
    let isLeap = false;

    offset -= lunarTotal;
    let lunarM = 1;
    let lunarD;

    for (let m = 1; m <= 12; m++) {
        const mDays = monthDays(idx, m);
        if (offset < mDays) {
            lunarD = offset + 1;
            break;
        }
        offset -= mDays;
        lunarM++;
        if (m === leap) {
            const lDays = leapDays(idx);
            if (offset < lDays) {
                isLeap = true;
                lunarD = offset + 1;
                break;
            }
            offset -= lDays;
        }
    }

    return { year: lunarY, month: lunarM, day: lunarD || offset + 1, isLeap };
}

// ==================== UTILITIES ====================
function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function getGanZhiYear(year) {
    const offset = (year - 4) % 60;
    return tianGan[offset % 10] + diZhi[offset % 12];
}

function getShengXiao(year) {
    return shengXiao[(year - 4) % 12];
}

function getHolidayText(date) {
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return holidaysSolar[m + d] || null;
}

function getLunarHolidayText(lunarM, lunarD, isLeap) {
    if (isLeap) return null;
    const key = String(lunarM).padStart(2, '0') + String(lunarD).padStart(2, '0');
    return holidaysLunar[key] || null;
}

function getLunarDayText(date) {
    const lunar = solarToLunar(date);
    const d = lunar.day;
    if (d === 1) {
        return (lunar.isLeap ? '闰' : '') + lunarMonths[lunar.month - 1] + '月';
    }
    return lunarDays[d];
}

// ==================== STORAGE ====================
function loadEvents() {
    try {
        const data = localStorage.getItem('sycalendar_events');
        if (data) events = JSON.parse(data);
    } catch(e) {
        events = [];
    }
}

function saveEvents() {
    localStorage.setItem('sycalendar_events', JSON.stringify(events));
}

function getEventsForDate(date) {
    return events.filter(e => e.date === formatDate(date));
}

function hasEventsOnDate(date) {
    return events.some(e => e.date === formatDate(date));
}

// ==================== TOAST ====================
function showToast(msg, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast ' + type + ' show';
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ==================== MODAL ====================
function openModal(eventId = null, dateStr = null) {
    const overlay = document.getElementById('modalOverlay');
    const titleEl = document.getElementById('modalTitle');
    const delBtn = document.getElementById('modalDelete');

    if (eventId) {
        const ev = events.find(e => e.id === eventId);
        if (!ev) return;
        editingEventId = eventId;
        titleEl.textContent = '编辑日程';
        delBtn.style.display = 'inline-block';
        document.getElementById('eventTitle').value = ev.title || '';
        document.getElementById('eventDate').value = ev.date || '';
        document.getElementById('eventStartTime').value = ev.startTime || '09:00';
        document.getElementById('eventEndTime').value = ev.endTime || '10:00';
        document.getElementById('eventReminder').value = ev.reminder || '0';
        document.getElementById('eventNotes').value = ev.notes || '';
    } else {
        editingEventId = null;
        titleEl.textContent = '添加日程';
        delBtn.style.display = 'none';
        document.getElementById('eventTitle').value = '';
        document.getElementById('eventDate').value = dateStr || formatDate(selectedDate);
        document.getElementById('eventStartTime').value = '09:00';
        document.getElementById('eventEndTime').value = '10:00';
        document.getElementById('eventReminder').value = '15';
        document.getElementById('eventNotes').value = '';
    }

    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
        overlay.classList.add('show');
    });
    document.getElementById('eventTitle').focus();
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('show');
    setTimeout(() => {
        if (!overlay.classList.contains('show')) {
            overlay.style.display = 'none';
        }
    }, 300);
    editingEventId = null;
}

function saveEvent() {
    const title = document.getElementById('eventTitle').value.trim();
    const date = document.getElementById('eventDate').value;
    const startTime = document.getElementById('eventStartTime').value;
    const endTime = document.getElementById('eventEndTime').value;
    const reminder = document.getElementById('eventReminder').value;
    const notes = document.getElementById('eventNotes').value.trim();

    if (!title) {
        showToast('请输入日程标题', 'error');
        return;
    }
    if (!date) {
        showToast('请选择日期', 'error');
        return;
    }

    if (editingEventId) {
        const idx = events.findIndex(e => e.id === editingEventId);
        if (idx >= 0) {
            events[idx] = { ...events[idx], title, date, startTime, endTime, reminder, notes };
            showToast('日程已更新', 'success');
        }
    } else {
        events.push({
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            title, date, startTime, endTime, reminder, notes
        });
        showToast('日程已添加', 'success');
    }

    saveEvents();
    closeModal();
    refreshAll();
}

function deleteEvent() {
    if (!editingEventId) return;
    if (!confirm('确定要删除这个日程吗？')) return;
    events = events.filter(e => e.id !== editingEventId);
    saveEvents();
    closeModal();
    refreshAll();
    showToast('日程已删除', 'success');
}

// ==================== RENDER FUNCTIONS ====================
function updateBigDateDisplay() {
    const day = selectedDate.getDate();
    const year = selectedDate.getFullYear();
    const weekDay = weekDays[selectedDate.getDay()];
    const lunar = solarToLunar(selectedDate);
    const ganZhi = getGanZhiYear(year);
    const sx = getShengXiao(year);

    const lunarMonth = (lunar.isLeap ? '闰' : '') + lunarMonths[lunar.month - 1];
    const lunarDay = lunarDays[lunar.day];
    const holiday = getHolidayText(selectedDate);
    const lunarHoliday = getLunarHolidayText(lunar.month, lunar.day, lunar.isLeap);

    document.getElementById('bigDay').textContent = day;
    document.getElementById('bigDateInfo').textContent =
        `${ganZhi}${sx}年 | ${lunarMonth}月${lunarDay} ${weekDay}`;

    let extra = [];
    if (holiday) extra.push(holiday);
    if (lunarHoliday) extra.push(lunarHoliday);
    document.getElementById('bigDateLunar').textContent = extra.join(' · ') || '\u00A0';
}

function renderMonthView() {
    const year = viewYear;
    const month = viewMonth;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

    let html = `<div class="calendar-header">
        <div class="month-nav">
            <button class="nav-btn" data-action="prev">‹</button>
            <span class="month-year">${year}年 ${month + 1}月</span>
            <button class="nav-btn" data-action="next">›</button>
        </div>
        <div class="header-right">
            <button class="header-btn" data-action="today">今天</button>
        </div>
    </div>
    <div class="weekdays">`;

    for (const w of weekDaysShort) {
        html += `<div class="weekday">${w}</div>`;
    }
    html += `</div><div class="days">`;

    for (let i = startingDay - 1; i >= 0; i--) {
        html += `<div class="day empty other-month"><span class="day-number">${prevMonthLastDay - i}</span></div>`;
    }

    for (let d = 1; d <= totalDays; d++) {
        const date = new Date(year, month, d);
        const dow = date.getDay();
        const isWeekend = dow === 0 || dow === 6;
        const isToday = isCurrentMonth && d === today.getDate();
        const isSelected = selectedDate.getFullYear() === year &&
                          selectedDate.getMonth() === month &&
                          selectedDate.getDate() === d;
        const hasEvent = hasEventsOnDate(date);

        const lunarText = getLunarDayText(date);
        let displayText = getHolidayText(date) || getLunarHolidayText(solarToLunar(date).month, solarToLunar(date).day, solarToLunar(date).isLeap) || lunarText;

        let cls = 'day';
        if (isWeekend) cls += ' weekend';
        if (isToday) cls += ' today';
        if (isSelected) cls += ' selected';
        if (hasEvent) cls += ' has-event';

        html += `<div class="${cls}" data-date="${formatDate(date)}">
            <span class="day-number">${d}</span>
            <span class="day-lunar">${displayText}</span>
        </div>`;
    }

    const remaining = 42 - (startingDay + totalDays);
    for (let i = 1; i <= remaining; i++) {
        html += `<div class="day empty other-month"><span class="day-number">${i}</span></div>`;
    }

    html += `</div>`;

    const selDateEvents = getEventsForDate(selectedDate);
    html += `<div class="calendar-footer">
        <div class="selected-info">
            <span class="selected-label">已选择</span>
            <span class="selected-date-text">${selectedDate.getMonth()+1}月${selectedDate.getDate()}日 ${weekDays[selectedDate.getDay()]}</span>
            <button class="header-btn" data-action="addEvent" style="padding:2px 8px;font-size:11px;">+日程</button>
        </div>`;
    if (selDateEvents.length > 0) {
        html += `<div class="selected-events">`;
        for (const ev of selDateEvents) {
            const timeLabel = ev.startTime ? ev.startTime.slice(0, 5) : '全天';
            html += `<div class="selected-event-chip" data-event-id="${ev.id}">${timeLabel} ${ev.title}</div>`;
        }
        html += `</div>`;
    }
    html += `</div>`;

    document.getElementById('calendarCard').innerHTML = html;

    requestAnimationFrame(() => {
        const days = document.querySelectorAll('.days .day:not(.empty)');
        days.forEach((day, index) => {
            setTimeout(() => day.classList.add('visible'), index * 10);
        });
        document.getElementById('calendarCard').classList.add('visible');
        document.getElementById('bigDateDisplay').classList.add('visible');
    });

    updateBigDateDisplay();
    updateSidebarEvents();
}

function renderYearView() {
    const year = viewYear;
    const today = new Date();

    let html = `<div class="calendar-header" style="margin-bottom:8px;">
        <div class="month-nav">
            <button class="nav-btn" data-action="prev">‹</button>
            <span class="month-year">${year}年</span>
            <button class="nav-btn" data-action="next">›</button>
        </div>
        <div class="header-right">
            <button class="header-btn" data-action="today">今年</button>
        </div>
    </div><div class="year-view">`;

    for (let m = 0; m < 12; m++) {
        const firstDay = new Date(year, m, 1);
        const lastDay = new Date(year, m + 1, 0);
        const startDow = firstDay.getDay();
        const totalDays = lastDay.getDate();

        html += `<div class="year-month-card" data-month="${m}">
            <div class="year-month-header">${m + 1}月</div>
            <div class="year-month-mini-grid">`;

        for (const w of weekDaysShort) {
            html += `<div class="year-mini-day" style="color:rgba(255,255,255,0.25);font-size:8px;">${w}</div>`;
        }

        for (let i = 0; i < startDow; i++) {
            html += `<div class="year-mini-day"></div>`;
        }

        for (let d = 1; d <= totalDays; d++) {
            const date = new Date(year, m, d);
            const isToday = date.toDateString() === today.toDateString();
            const hasEvent = hasEventsOnDate(date);

            let cls = 'year-mini-day current-month';
            if (isToday) cls += ' today';
            if (hasEvent) cls += ' has-event';

            html += `<div class="${cls}" data-date="${formatDate(date)}">${d}</div>`;
        }

        html += `</div></div>`;
    }

    html += `</div>`;

    document.getElementById('bigDateDisplay').style.display = 'none';
    document.getElementById('calendarCard').innerHTML = html;

    requestAnimationFrame(() => {
        document.getElementById('calendarCard').classList.add('visible');
    });

    updateSidebarEvents();
}

function renderWeekView() {
    const today = new Date();
    const selDow = selectedDate.getDay();
    const monday = new Date(selectedDate);
    monday.setDate(selectedDate.getDate() - (selDow === 0 ? 6 : selDow - 1));

    let html = `<div class="calendar-header">
        <div class="month-nav">
            <button class="nav-btn" data-action="prev">‹</button>
            <span class="month-year">${monday.getMonth()+1}月${monday.getDate()}日 - ${new Date(monday.getTime() + 6*86400000).getMonth()+1}月${new Date(monday.getTime() + 6*86400000).getDate()}日</span>
            <button class="nav-btn" data-action="next">›</button>
        </div>
        <div class="header-right">
            <button class="header-btn" data-action="today">本周</button>
        </div>
    </div>`;

    html += `<div class="week-header"><div class="week-header-time"></div>`;
    for (let i = 0; i < 7; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        const isToday = d.toDateString() === today.toDateString();
        const isSelected = d.toDateString() === selectedDate.toDateString();
        html += `<div class="week-header-day${isToday?' today':''}${isSelected?' selected':''}" data-date="${formatDate(d)}">
            <div class="week-day-name">${weekDaysShort[d.getDay()]}</div>
            <div class="week-day-num">${d.getDate()}</div>
        </div>`;
    }
    html += `</div><div class="week-body">`;

    for (let h = 6; h <= 22; h++) {
        html += `<div class="week-time-label">${String(h).padStart(2,'0')}:00</div>`;
        for (let i = 0; i < 7; i++) {
            const d = new Date(monday);
            d.setDate(monday.getDate() + i);
            const ds = formatDate(d);
            const dayEvents = events.filter(e => e.date === ds);

            html += `<div class="week-cell" data-date="${ds}" data-hour="${h}">`;
            for (const ev of dayEvents) {
                const startH = ev.startTime ? parseInt(ev.startTime.split(':')[0]) : -1;
                if (startH === h) {
                    html += `<div class="week-event" data-event-id="${ev.id}">${ev.startTime ? ev.startTime.slice(0,5)+' ' : ''}${ev.title}</div>`;
                }
            }
            html += `</div>`;
        }
    }
    html += `</div>`;

    const selDateEvents = getEventsForDate(selectedDate);
    html += `<div class="calendar-footer">
        <div class="selected-info">
            <span class="selected-label">已选择</span>
            <span class="selected-date-text">${selectedDate.getMonth()+1}月${selectedDate.getDate()}日 ${weekDays[selectedDate.getDay()]}</span>
            <button class="header-btn" data-action="addEvent" style="padding:2px 8px;font-size:11px;">+日程</button>
        </div>`;
    if (selDateEvents.length > 0) {
        html += `<div class="selected-events">`;
        for (const ev of selDateEvents) {
            html += `<div class="selected-event-chip" data-event-id="${ev.id}">${ev.title}</div>`;
        }
        html += `</div>`;
    }
    html += `</div>`;

    document.getElementById('bigDateDisplay').style.display = 'block';
    document.getElementById('calendarCard').innerHTML = html;

    requestAnimationFrame(() => {
        document.getElementById('calendarCard').classList.add('visible');
        document.getElementById('bigDateDisplay').classList.add('visible');
    });

    updateBigDateDisplay();
    updateSidebarEvents();
}

function renderDayView() {
    const date = selectedDate;
    const dayEvents = getEventsForDate(date);

    let html = `<div class="calendar-header">
        <div class="month-nav">
            <button class="nav-btn" data-action="prev">‹</button>
            <span class="month-year">${date.getFullYear()}年 ${date.getMonth()+1}月${date.getDate()}日 ${weekDays[date.getDay()]}</span>
            <button class="nav-btn" data-action="next">›</button>
        </div>
        <div class="header-right">
            <button class="header-btn" data-action="today">今天</button>
            <button class="header-btn" data-action="addEvent">+日程</button>
        </div>
    </div><div class="day-timeline">`;

    for (let h = 0; h < 24; h++) {
        const hourEvents = dayEvents.filter(ev => {
            if (!ev.startTime) return h === 0;
            return parseInt(ev.startTime.split(':')[0]) === h;
        });

        html += `<div class="day-hour-row">
            <div class="day-hour-label">${String(h).padStart(2,'0')}:00</div>
            <div class="day-hour-content">`;
        for (const ev of hourEvents) {
            const timeRange = ev.startTime && ev.endTime ? `${ev.startTime.slice(0,5)}-${ev.endTime.slice(0,5)}` : '全天';
            html += `<div class="day-event" data-event-id="${ev.id}">🕐 ${timeRange} | ${ev.title}</div>`;
        }
        html += `</div></div>`;
    }
    html += `</div>`;

    document.getElementById('bigDateDisplay').style.display = 'block';
    document.getElementById('calendarCard').innerHTML = html;

    requestAnimationFrame(() => {
        document.getElementById('calendarCard').classList.add('visible');
        document.getElementById('bigDateDisplay').classList.add('visible');
    });

    updateBigDateDisplay();
    updateSidebarEvents();
}

function updateSidebarEvents() {
    const today = new Date();
    const todayStr = formatDate(today);
    const todayEvents = events.filter(e => e.date === todayStr);
    const list = document.getElementById('sidebarEventsList');

    if (todayEvents.length === 0) {
        list.innerHTML = `<div class="sidebar-empty">今日暂无日程</div>`;
    } else {
        list.innerHTML = todayEvents.map(ev => `
            <div class="sidebar-event-item" data-event-id="${ev.id}">
                <div class="sidebar-event-title">${ev.title}</div>
                <div class="sidebar-event-time">${ev.startTime ? ev.startTime.slice(0,5) : '全天'}${ev.endTime ? ' - ' + ev.endTime.slice(0,5) : ''}</div>
                <button class="sidebar-event-delete" data-event-id="${ev.id}" data-action="deleteEvent">✕</button>
            </div>
        `).join('');
    }

    const upcoming = [];
    for (let i = 1; i <= 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        const ds = formatDate(d);
        upcoming.push(...events.filter(e => e.date === ds));
    }

    if (upcoming.length > 0) {
        list.innerHTML += `<div style="font-size:11px;color:var(--text-dim);padding:8px 0 4px 8px;letter-spacing:1px;">即将到来</div>`;
        list.innerHTML += upcoming.slice(0, 5).map(ev => `
            <div class="sidebar-event-item" data-event-id="${ev.id}" style="opacity:0.6;">
                <div class="sidebar-event-title">${ev.title}</div>
                <div class="sidebar-event-time">${ev.date} ${ev.startTime ? ev.startTime.slice(0,5) : ''}</div>
                <button class="sidebar-event-delete" data-event-id="${ev.id}" data-action="deleteEvent">✕</button>
            </div>
        `).join('');
    }
}

function exportICS() {
    if (events.length === 0) {
        showToast('暂无日程可导出', 'error');
        return;
    }

    let ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//SyCalendar//CN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:SyCalendar Schedules',
        'X-WR-TIMEZONE:Asia/Shanghai'
    ];

    for (const ev of events) {
        const dtStart = ev.date.replace(/-/g, '');
        const tStart = ev.startTime ? ev.startTime.replace(':', '') + '00' : '';
        const dtEnd = ev.date.replace(/-/g, '');
        const tEnd = ev.endTime ? ev.endTime.replace(':', '') + '00' : '';
        const uid = ev.id + '@sycalendar';

        ics.push('BEGIN:VEVENT');
        ics.push('UID:' + uid);
        ics.push('DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z');
        if (tStart) {
            ics.push('DTSTART;TZID=Asia/Shanghai:' + dtStart + 'T' + tStart);
        } else {
            ics.push('DTSTART;VALUE=DATE:' + dtStart);
        }
        if (tEnd) {
            ics.push('DTEND;TZID=Asia/Shanghai:' + dtEnd + 'T' + tEnd);
        } else if (!tStart) {
            ics.push('DTEND;VALUE=DATE:' + dtEnd);
        }
        ics.push('SUMMARY:' + ev.title);
        if (ev.notes) {
            ics.push('DESCRIPTION:' + ev.notes.replace(/\n/g, '\\n'));
        }
        if (ev.reminder && ev.reminder !== '0') {
            ics.push('BEGIN:VALARM');
            ics.push('TRIGGER:-PT' + ev.reminder + 'M');
            ics.push('ACTION:DISPLAY');
            ics.push('DESCRIPTION:Reminder: ' + ev.title);
            ics.push('END:VALARM');
        }
        ics.push('END:VEVENT');
    }

    ics.push('END:VCALENDAR');

    const blob = new Blob([ics.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SyCalendar_' + new Date().toISOString().split('T')[0] + '.ics';
    a.click();
    URL.revokeObjectURL(url);
    showToast('日程已导出为 ICS 文件', 'success');
}

// ==================== MAIN RENDER ====================
function renderView() {
    switch (currentView) {
        case 'year': renderYearView(); break;
        case 'week': renderWeekView(); break;
        case 'day': renderDayView(); break;
        case 'month':
        default: renderMonthView(); break;
    }
}

function refreshAll() {
    renderView();
}

function switchView(view) {
    currentView = view;
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.view-btn[data-view="${view}"]`);
    if (btn) btn.classList.add('active');
    document.getElementById('bigDateDisplay').style.display = (view === 'year') ? 'none' : 'block';

    const card = document.getElementById('calendarCard');
    const bigDate = document.getElementById('bigDateDisplay');
    card.classList.remove('visible');
    bigDate.classList.remove('visible');

    card.classList.remove('view-year', 'view-week', 'view-day');
    if (view !== 'month') {
        card.classList.add('view-' + view);
    }

    setTimeout(() => {
        renderView();
    }, 50);
}

function navigate(direction) {
    switch (currentView) {
        case 'year':
            viewYear += direction;
            break;
        case 'month':
            viewMonth += direction;
            if (viewMonth < 0) { viewMonth = 11; viewYear--; }
            if (viewMonth > 11) { viewMonth = 0; viewYear++; }
            break;
        case 'week':
            selectedDate.setDate(selectedDate.getDate() + direction * 7);
            break;
        case 'day':
            selectedDate.setDate(selectedDate.getDate() + direction);
            break;
    }
    renderView();
}

function goToToday() {
    currentDate = new Date();
    selectedDate = new Date();
    viewYear = currentDate.getFullYear();
    viewMonth = currentDate.getMonth();
    renderView();
}

// ==================== EVENT HANDLERS ====================
function handleCardClick(e) {
    const target = e.target;

    const navBtn = target.closest('[data-action]');
    if (navBtn) {
        const action = navBtn.dataset.action;
        switch (action) {
            case 'prev': navigate(-1); break;
            case 'next': navigate(1); break;
            case 'today': goToToday(); break;
            case 'addEvent': openModal(null, formatDate(selectedDate)); break;
            case 'deleteEvent':
                const evId = navBtn.dataset.eventId;
                if (evId && confirm('确定要删除这个日程吗？')) {
                    events = events.filter(ev => ev.id !== evId);
                    saveEvents();
                    refreshAll();
                    showToast('日程已删除', 'success');
                }
                e.stopPropagation();
                break;
        }
        return;
    }

    const eventEl = target.closest('[data-event-id]');
    if (eventEl) {
        openModal(eventEl.dataset.eventId);
        return;
    }

    let dateEl = target.closest('[data-date]');
    if (!dateEl) {
        dateEl = target.closest('.day');
        if (!dateEl || dateEl.classList.contains('empty') || dateEl.classList.contains('other-month')) return;
    }

    const dateStr = dateEl.dataset.date;
    if (dateStr) {
        selectedDate = new Date(dateStr + 'T00:00:00');
        viewYear = selectedDate.getFullYear();
        viewMonth = selectedDate.getMonth();

        const monthCard = target.closest('[data-month]');
        if (monthCard && currentView === 'year') {
            viewMonth = parseInt(monthCard.dataset.month);
            switchView('month');
            return;
        }
        renderView();
    }
}

// ==================== SIDEBAR COLLAPSE ====================
function initSidebarCollapse() {
    const sidebar = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('sidebarCollapseBtn');

    // Load collapsed state from localStorage
    const isCollapsed = localStorage.getItem('sycalendar_sidebar_collapsed') === 'true';
    if (isCollapsed && window.innerWidth > 768) {
        sidebar.classList.add('collapsed');
    }

    collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sycalendar_sidebar_collapsed', sidebar.classList.contains('collapsed'));
    });
}

// ==================== INIT ====================
function init() {
    loadEvents();

    document.getElementById('calendarCard').addEventListener('click', handleCardClick);
    document.getElementById('sidebarEventsList').addEventListener('click', handleCardClick);

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    document.getElementById('sidebarAddEvent').addEventListener('click', () => {
        openModal(null, formatDate(new Date()));
    });

    document.getElementById('exportBtn').addEventListener('click', exportICS);

    document.getElementById('modalCancel').addEventListener('click', closeModal);
    document.getElementById('modalSave').addEventListener('click', saveEvent);
    document.getElementById('modalDelete').addEventListener('click', deleteEvent);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalOverlay')) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (document.getElementById('modalOverlay').classList.contains('show')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'Enter' && e.ctrlKey) saveEvent();
            return;
        }
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 't' && !e.ctrlKey) goToToday();
        if (e.key === 'n' && !e.ctrlKey) openModal(null, formatDate(selectedDate));
        if (e.key === '[' && e.ctrlKey) {
            e.preventDefault();
            document.getElementById('sidebar').classList.toggle('collapsed');
            localStorage.setItem('sycalendar_sidebar_collapsed', document.getElementById('sidebar').classList.contains('collapsed'));
        }
    });

    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('mobile-open') &&
            !sidebar.contains(e.target) &&
            e.target !== toggle) {
            sidebar.classList.remove('mobile-open');
        }
    });

    initSidebarCollapse();
    renderMonthView();
    setInterval(updateSidebarEvents, 60000);
}

document.addEventListener('DOMContentLoaded', init);
