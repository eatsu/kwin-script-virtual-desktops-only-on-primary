/*
    SPDX-FileCopyrightText: 2024 eatsu <mkrmdk@gmail.com>

    SPDX-License-Identifier: GPL-3.0-or-later
*/

const primaryScreen = workspace.activeScreen;

function update(window) {
    window.onAllDesktops = window.output !== primaryScreen;
}

function setup(window) {
    if (!window.normalWindow) return;
    update(window);
    window.outputChanged.connect(() => update(window));
}

workspace.windowAdded.connect(setup);
workspace.windowList().forEach(setup);
