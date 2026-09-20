(() => {
  "use strict";

  const COPY = {
    zh: {
      title: "敖尹應援頭像框",
      titleLine1: "敖尹應援",
      titleLine2: "頭像框",
      campaignBefore: "敖尹的加入，也是",
      gameTitle: "《戀與深空》",
      campaignAfter: "長期內容規劃中的一環。",
      campaignTeam: "製作組",
      campaignDate: "，2026.06.28",
      introLine1: "加上頭像框，用專屬於你的頭貼",
      introLine2: "為敖尹應援吧！",
      home: "回首頁",
      privacy: "照片只會在您的裝置上處理與保存，不會上傳至任何伺服器。",
      frameTitle: "選擇頭像框",
      dragHint: "拖曳移動 · 雙指縮放",
      zoom: "縮放",
      start: "開始製作",
      startLabel: "開始製作頭像框",
      uploadPhoto: "上傳照片",
      loadingPhoto: "讀取照片中…",
      save: "儲存圖片",
      blankSave: "不使用照片？直接儲存留白版本",
      restart: "重新製作",
      createdBy: "本網站由",
      createdSuffix: "創建",
      aiCredit: "頭像框圖案由 Codex 生成",
      disclaimer: "此為玩家自製之應援工具，與《戀與深空》官方無直接關聯",
      saveSuccess: "保存成功",
      frameBasicBring: "基礎 · #BRINGVALKOBACK",
      frameBasicLoved: "基礎 · #VALKOISLOVED",
      frameWolfBring: "狼嚎 · #BRINGVALKOBACK",
      frameWolfLoved: "狼嚎 · #VALKOISLOVED",
      frameLilyBring: "鈴蘭 · #BRINGVALKOBACK",
      frameLilyLoved: "鈴蘭 · #VALKOISLOVED",
      exportTitle: "選擇圖片尺寸",
      highQuality: "高畫質",
      smallFile: "較小檔案",
      cancel: "取消",
      preparing: "正在準備圖片…",
      saved: "圖片已準備完成",
      downloadStarted: "已開始下載，請查看瀏覽器的下載項目。",
      invalidImage: "無法讀取這張圖片，請換一張試試。",
      frameLoading: "頭像框載入中，請稍候。"
    },
    en: {
      title: "Valko Support Avatar Frames",
      titleLine1: "Valko Support",
      titleLine2: "Avatar Frames",
      campaignBefore: "The development of Valko and his related content is part of the long-term content plan for",
      gameTitle: "Love and Deepspace",
      campaignAfter: ".",
      campaignTeam: "Development Team",
      campaignDate: ", June 28, 2026",
      introLine1: "Add a frame and show your support for Valko",
      introLine2: "with a profile picture that’s uniquely yours!",
      home: "Home",
      privacy: "Your photo is processed and saved only on your device. It is never uploaded to any server.",
      frameTitle: "Choose a frame",
      dragHint: "Drag to move · Pinch to zoom",
      zoom: "Zoom",
      start: "Start creating",
      startLabel: "Start making an avatar frame",
      uploadPhoto: "Upload photo",
      loadingPhoto: "Loading photo…",
      save: "Save image",
      blankSave: "No photo? Save a blank version",
      restart: "Make another",
      createdBy: "Created by",
      createdSuffix: "",
      aiCredit: "Avatar frame artwork was generated with Codex",
      disclaimer: "This is a fan-made support tool with no direct affiliation with the official Love and Deepspace team.",
      saveSuccess: "Saved successfully",
      frameBasicBring: "Basic · #BRINGVALKOBACK",
      frameBasicLoved: "Basic · #VALKOISLOVED",
      frameWolfBring: "Wolf Howl · #BRINGVALKOBACK",
      frameWolfLoved: "Wolf Howl · #VALKOISLOVED",
      frameLilyBring: "Lily of the Valley · #BRINGVALKOBACK",
      frameLilyLoved: "Lily of the Valley · #VALKOISLOVED",
      exportTitle: "Choose image size",
      highQuality: "High quality",
      smallFile: "Smaller file",
      cancel: "Cancel",
      preparing: "Preparing your image…",
      saved: "Your image is ready",
      downloadStarted: "Download started. Check your browser's downloads.",
      invalidImage: "This image could not be opened. Please try another.",
      frameLoading: "The frame is still loading. Please wait."
    }
  };

  const OUTPUT_SIZE = 2048;
  const MIN_ZOOM = 0.2;
  const MAX_ZOOM = 3;
  const ZOOM_SNAP_VALUE = 1;
  const ZOOM_SNAP_RADIUS = 0.06;
  const ZOOM_FINE_TUNE_HOLD_MS = 450;
  const CANVAS_MINT = "#4f918d";
  const EMPTY_CANVAS_MINT = "#3b6b68";
  const frames = [
    {
      id: "basic-bringvalkoback",
      nameKey: "frameBasicBring",
      type: "image",
      src: "assets/frame-basic-bringvalkoback.png?v=20260801-3",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "basic-valkoisloved",
      nameKey: "frameBasicLoved",
      type: "image",
      src: "assets/frame-basic-valkoisloved.png?v=20260801-3",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "wolf-howl-bringvalkoback",
      nameKey: "frameWolfBring",
      type: "image",
      src: "assets/frame-wolf-howl-bringvalkoback.png?v=20260804-1",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "wolf-howl-valkoisloved",
      nameKey: "frameWolfLoved",
      type: "image",
      src: "assets/frame-wolf-howl-valkoisloved.png?v=20260804-1",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "lily-bringvalkoback",
      nameKey: "frameLilyBring",
      type: "image",
      src: "assets/frame-lily-bringvalkoback.png?v=20260920-2",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "lily-valkoisloved",
      nameKey: "frameLilyLoved",
      type: "image",
      src: "assets/frame-lily-valkoisloved.png?v=20260920-2",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    }
  ];

  const state = {
    language: localStorage.getItem("bringvalkoback-language") || "zh",
    photo: null,
    photoLoading: false,
    photoLoadToken: 0,
    frameIndex: 0,
    zoom: 1,
    panX: 0,
    panY: 0,
    pointers: new Map(),
    dragStart: null,
    pinchStart: null,
    exportMode: "photo"
  };

  const zoomSnapInteraction = {
    bypass: false,
    holdTimer: null
  };

  const elements = {
    uploadScreen: document.querySelector("#uploadScreen"),
    editorScreen: document.querySelector("#editorScreen"),
    brandLabel: document.querySelector("#brandLabel"),
    homeButton: document.querySelector("#homeButton"),
    photoInput: document.querySelector("#photoInput"),
    uploadButton: document.querySelector("#uploadButton"),
    canvasUploadButton: document.querySelector("#canvasUploadButton"),
    canvasWrap: document.querySelector("#canvasWrap"),
    canvas: document.querySelector("#previewCanvas"),
    gestureHint: document.querySelector("#gestureHint"),
    controls: document.querySelector(".controls"),
    zoomSlider: document.querySelector("#zoomSlider"),
    zoomValue: document.querySelector("#zoomValue"),
    saveButton: document.querySelector("#saveButton"),
    blankSaveButton: document.querySelector("#blankSaveButton"),
    restartButton: document.querySelector("#restartButton"),
    frameList: document.querySelector("#frameList"),
    frameName: document.querySelector("#frameName"),
    frameIndex: document.querySelector("#frameIndex"),
    exportSheet: document.querySelector("#exportSheet"),
    closeSheetButton: document.querySelector("#closeSheetButton"),
    homeFrameStack: document.querySelector("#homeFrameStack"),
    homeStackFront: document.querySelector("#homeStackFront"),
    homeStackMiddle: document.querySelector("#homeStackMiddle"),
    homeStackBack: document.querySelector("#homeStackBack"),
    toast: document.querySelector("#toast"),
    successOverlay: document.querySelector("#successOverlay")
  };

  const previewContext = elements.canvas.getContext("2d", { alpha: false });
  let homeFrameOrder = [];
  let homeFrameCursor = 0;
  let homeFrameInterval = null;
  let homeFrameTimeout = null;

  function text(key) {
    return COPY[state.language][key];
  }

  function shuffledFrameIndexes() {
    const indexes = frames.map((_, index) => index);
    for (let index = indexes.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
    }
    return indexes;
  }

  function renderHomeFrameStack() {
    if (!elements.homeFrameStack || homeFrameOrder.length === 0) return;
    const frameAt = (offset) => frames[homeFrameOrder[(homeFrameCursor + offset) % frames.length]];
    elements.homeStackFront.src = frameAt(0).src;
    elements.homeStackMiddle.src = frameAt(1).src;
    elements.homeStackBack.src = frameAt(2).src;
  }

  function advanceHomeFrameStack() {
    if (!elements.homeFrameStack || elements.uploadScreen.hidden) return;
    elements.homeFrameStack.classList.add("is-cycling");
    window.clearTimeout(homeFrameTimeout);
    homeFrameTimeout = window.setTimeout(() => {
      homeFrameCursor += 1;
      if (homeFrameCursor >= frames.length) {
        const carriedFrames = homeFrameOrder.slice(0, 2);
        const reshuffledFrames = shuffledFrameIndexes()
          .filter((frameIndex) => !carriedFrames.includes(frameIndex));
        homeFrameOrder = [...carriedFrames, ...reshuffledFrames];
        homeFrameCursor = 0;
      }
      renderHomeFrameStack();
      elements.homeFrameStack.classList.remove("is-cycling");
    }, 520);
  }

  function startHomeFrameRotation() {
    window.clearInterval(homeFrameInterval);
    window.clearTimeout(homeFrameTimeout);
    if (homeFrameOrder.length === 0) {
      homeFrameOrder = shuffledFrameIndexes();
      homeFrameCursor = 0;
    }
    renderHomeFrameStack();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      homeFrameInterval = window.setInterval(advanceHomeFrameStack, 3000);
    }
  }

  function stopHomeFrameRotation() {
    window.clearInterval(homeFrameInterval);
    window.clearTimeout(homeFrameTimeout);
    homeFrameInterval = null;
    homeFrameTimeout = null;
    elements.homeFrameStack?.classList.remove("is-cycling");
  }

  function setLanguage(language) {
    state.language = language;
    localStorage.setItem("bringvalkoback-language", language);
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
    document.title = language === "zh"
      ? "敖尹應援頭像框小工具"
      : "Valko Support Avatar Frame Maker";

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = text(node.dataset.i18n);
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    elements.uploadButton.setAttribute("aria-label", text("startLabel"));
    updateEditorState();
    elements.homeButton.setAttribute("aria-label", text("home"));
    elements.homeButton.setAttribute("title", text("home"));
    updateFrameMeta();
    renderFrameOptions();
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      elements.toast.classList.remove("is-visible");
    }, 2100);
  }

  function showSuccess() {
    window.clearTimeout(showSuccess.hideTimer);
    window.clearTimeout(showSuccess.removeTimer);
    elements.successOverlay.hidden = false;
    requestAnimationFrame(() => {
      elements.successOverlay.classList.add("is-visible");
    });
    showSuccess.hideTimer = window.setTimeout(() => {
      elements.successOverlay.classList.remove("is-visible");
      showSuccess.removeTimer = window.setTimeout(() => {
        elements.successOverlay.hidden = true;
      }, 220);
    }, 1500);
  }

  function detectAlphaBounds(image, fallbackBounds) {
    const maxScanDimension = 1024;
    const scanScale = Math.min(
      1,
      maxScanDimension / Math.max(image.naturalWidth, image.naturalHeight)
    );
    const scanWidth = Math.max(1, Math.round(image.naturalWidth * scanScale));
    const scanHeight = Math.max(1, Math.round(image.naturalHeight * scanScale));
    const scanCanvas = document.createElement("canvas");
    scanCanvas.width = scanWidth;
    scanCanvas.height = scanHeight;
    const scanContext = scanCanvas.getContext("2d", { willReadFrequently: true });
    scanContext.drawImage(image, 0, 0, scanWidth, scanHeight);

    try {
      const pixels = scanContext.getImageData(0, 0, scanWidth, scanHeight).data;
      let minX = scanWidth;
      let minY = scanHeight;
      let maxX = -1;
      let maxY = -1;

      for (let y = 0; y < scanHeight; y += 1) {
        for (let x = 0; x < scanWidth; x += 1) {
          const alpha = pixels[(y * scanWidth + x) * 4 + 3];
          if (alpha > 8) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      if (maxX >= minX && maxY >= minY) {
        return {
          x: minX / scanScale,
          y: minY / scanScale,
          width: (maxX - minX + 1) / scanScale,
          height: (maxY - minY + 1) / scanScale
        };
      }
    } catch (error) {
      console.warn("Unable to inspect frame transparency; using the full image.", error);
    }

    return fallbackBounds || {
      x: 0,
      y: 0,
      width: image.naturalWidth,
      height: image.naturalHeight
    };
  }

  function loadFrames() {
    frames.forEach((frame) => {
      if (frame.type !== "image" || !frame.src) return;
      const image = new Image();
      image.onload = () => {
        frame.image = image;
        frame.bounds = detectAlphaBounds(image, frame.fallbackBounds);
        renderFrameThumbnail(frames.indexOf(frame));
        renderPreview();
      };
      image.src = frame.src;
    });
  }

  function drawFittedFrame(context, frame, size) {
    if (!frame.image) return;
    const bounds = frame.bounds || {
      x: 0,
      y: 0,
      width: frame.image.naturalWidth,
      height: frame.image.naturalHeight
    };
    const scale = Math.max(size / bounds.width, size / bounds.height);
    const boundsCenterX = bounds.x + bounds.width / 2;
    const boundsCenterY = bounds.y + bounds.height / 2;
    const drawWidth = frame.image.naturalWidth * scale;
    const drawHeight = frame.image.naturalHeight * scale;
    const drawX = size / 2 - boundsCenterX * scale;
    const drawY = size / 2 - boundsCenterY * scale;
    context.drawImage(frame.image, drawX, drawY, drawWidth, drawHeight);
  }

  function getImageMetrics(size = OUTPUT_SIZE) {
    if (!state.photo) return null;
    const baseScale = Math.max(
      size / state.photo.naturalWidth,
      size / state.photo.naturalHeight
    );
    const scale = baseScale * state.zoom;
    const sizeRatio = size / OUTPUT_SIZE;
    return {
      scale,
      width: state.photo.naturalWidth * scale,
      height: state.photo.naturalHeight * scale,
      centerX: size / 2 + state.panX * sizeRatio,
      centerY: size / 2 + state.panY * sizeRatio
    };
  }

  function clampPan() {
    const metrics = getImageMetrics();
    if (!metrics) return;
    const maxX = Math.abs(metrics.width - OUTPUT_SIZE) / 2;
    const maxY = Math.abs(metrics.height - OUTPUT_SIZE) / 2;
    state.panX = Math.max(-maxX, Math.min(maxX, state.panX));
    state.panY = Math.max(-maxY, Math.min(maxY, state.panY));
  }

  function renderToCanvas(canvas, size, options = {}) {
    const { clipPhotoToCircle = false, forceBlank = false } = options;
    const shouldDrawPhoto = Boolean(state.photo) && !forceBlank;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d", { alpha: false });
    context.clearRect(0, 0, size, size);
    context.fillStyle = shouldDrawPhoto ? CANVAS_MINT : EMPTY_CANVAS_MINT;
    context.fillRect(0, 0, size, size);

    if (shouldDrawPhoto) {
      const metrics = getImageMetrics(size);
      context.save();
      if (clipPhotoToCircle) {
        context.beginPath();
        context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        context.clip();
      }
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(
        state.photo,
        metrics.centerX - metrics.width / 2,
        metrics.centerY - metrics.height / 2,
        metrics.width,
        metrics.height
      );
      context.restore();
    }

    const frame = frames[state.frameIndex];
    if (frame.type === "image" && frame.image) {
      drawFittedFrame(context, frame, size);
    }

  }

  function renderPreview() {
    renderToCanvas(elements.canvas, OUTPUT_SIZE, { clipPhotoToCircle: true });
  }

  function resetTransform() {
    endZoomInteraction();
    state.zoom = 1;
    state.panX = 0;
    state.panY = 0;
    elements.zoomSlider.value = "1";
    elements.zoomValue.textContent = "100%";
    renderPreview();
  }

  function beginZoomInteraction() {
    window.clearTimeout(zoomSnapInteraction.holdTimer);
    zoomSnapInteraction.bypass = false;
    zoomSnapInteraction.holdTimer = window.setTimeout(() => {
      zoomSnapInteraction.bypass = true;
    }, ZOOM_FINE_TUNE_HOLD_MS);
  }

  function endZoomInteraction() {
    window.clearTimeout(zoomSnapInteraction.holdTimer);
    zoomSnapInteraction.holdTimer = null;
    zoomSnapInteraction.bypass = false;
  }

  function updateZoomFromSlider(rawZoom) {
    const shouldSnap = !zoomSnapInteraction.bypass
      && Math.abs(rawZoom - ZOOM_SNAP_VALUE) <= ZOOM_SNAP_RADIUS + 1e-9;
    state.zoom = shouldSnap ? ZOOM_SNAP_VALUE : rawZoom;
    elements.zoomSlider.value = String(state.zoom);
    elements.zoomValue.textContent = `${Math.round(state.zoom * 100)}%`;
    clampPan();
    renderPreview();
  }

  function loadPhoto(file) {
    if (!file) return;
    const loadToken = ++state.photoLoadToken;
    state.photoLoading = true;
    updateEditorState();
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      if (loadToken !== state.photoLoadToken) {
        URL.revokeObjectURL(url);
        return;
      }
      if (state.photo?.objectUrl) URL.revokeObjectURL(state.photo.objectUrl);
      image.objectUrl = url;
      state.photo = image;
      state.photoLoading = false;
      state.frameIndex = 0;
      updateEditorState();
      resetTransform();
      renderFrameOptions();
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      if (loadToken !== state.photoLoadToken) return;
      state.photoLoading = false;
      updateEditorState();
      showToast(text("invalidImage"));
    };
    image.src = url;
  }

  function updateEditorState() {
    const hasPhoto = Boolean(state.photo);
    elements.canvasUploadButton.textContent = state.photoLoading
      ? text("loadingPhoto")
      : text("uploadPhoto");
    elements.canvasUploadButton.disabled = state.photoLoading;
    elements.canvasUploadButton.hidden = hasPhoto;
    elements.gestureHint.hidden = !hasPhoto;
    elements.zoomSlider.disabled = !hasPhoto;
    elements.saveButton.disabled = !hasPhoto;
    elements.blankSaveButton.hidden = hasPhoto;
    elements.restartButton.hidden = !hasPhoto;
    elements.canvasWrap.classList.toggle("is-empty", !hasPhoto);
    elements.controls.classList.toggle("is-collapsed", !hasPhoto);
  }

  function goHome() {
    if (state.photo?.objectUrl) {
      URL.revokeObjectURL(state.photo.objectUrl);
    }
    state.photo = null;
    state.photoLoading = false;
    state.photoLoadToken += 1;
    state.frameIndex = 0;
    state.pointers.clear();
    state.dragStart = null;
    state.pinchStart = null;
    elements.photoInput.value = "";
    elements.editorScreen.hidden = true;
    elements.uploadScreen.hidden = false;
    elements.homeButton.hidden = true;
    elements.brandLabel.hidden = false;
    closeExportSheet();
    resetTransform();
    updateEditorState();
    startHomeFrameRotation();
  }

  function showMaker() {
    stopHomeFrameRotation();
    elements.uploadScreen.hidden = true;
    elements.editorScreen.hidden = false;
    elements.brandLabel.hidden = true;
    elements.homeButton.hidden = false;
    updateEditorState();
    renderFrameOptions();
  }

  function restartMaker() {
    if (state.photo?.objectUrl) {
      URL.revokeObjectURL(state.photo.objectUrl);
    }
    state.photo = null;
    state.photoLoading = false;
    state.photoLoadToken += 1;
    state.frameIndex = 0;
    state.pointers.clear();
    state.dragStart = null;
    state.pinchStart = null;
    elements.photoInput.value = "";
    closeExportSheet();
    resetTransform();
    elements.uploadScreen.hidden = true;
    elements.editorScreen.hidden = false;
    elements.brandLabel.hidden = true;
    elements.homeButton.hidden = false;
    updateEditorState();
    updateFrameMeta();
    renderFrameOptions();
  }

  function selectFrame(index) {
    const bounded = Math.max(0, Math.min(frames.length - 1, index));
    state.frameIndex = bounded;
    updateFrameMeta();
    document.querySelectorAll(".frame-option").forEach((button, buttonIndex) => {
      const active = buttonIndex === bounded;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderPreview();
  }

  function updateFrameMeta() {
    if (!elements.frameName) return;
    const frame = frames[state.frameIndex];
    elements.frameName.textContent = text(frame.nameKey);
    elements.frameIndex.textContent = `${state.frameIndex + 1} / ${frames.length}`;
  }

  function renderFrameThumbnail(index) {
    const frame = frames[index];
    const canvas = elements.frameList.querySelector(`canvas[data-frame-index="${index}"]`);
    if (!canvas || !frame?.image) return;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawFittedFrame(context, frame, canvas.width);
    canvas.removeAttribute("aria-busy");
  }

  function renderFrameOptions() {
    elements.frameList.replaceChildren();
    frames.forEach((frame, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "frame-option";
      button.setAttribute("aria-label", text(frame.nameKey));
      button.addEventListener("click", () => selectFrame(index));

      const thumbnail = document.createElement("canvas");
      thumbnail.width = 128;
      thumbnail.height = 128;
      thumbnail.dataset.frameIndex = String(index);
      thumbnail.setAttribute("aria-busy", String(!frame.image));
      button.append(thumbnail);

      elements.frameList.append(button);
    });
    selectFrame(state.frameIndex);
    frames.forEach((frame, index) => {
      if (frame.image) renderFrameThumbnail(index);
    });
  }

  function canvasScale() {
    return OUTPUT_SIZE / elements.canvasWrap.getBoundingClientRect().width;
  }

  function pointerDistance(points) {
    return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
  }

  function onPointerDown(event) {
    if (!state.photo) return;
    elements.canvasWrap.setPointerCapture?.(event.pointerId);
    state.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    elements.gestureHint.classList.add("is-faded");

    const points = [...state.pointers.values()];
    if (points.length === 1) {
      state.dragStart = {
        x: event.clientX,
        y: event.clientY,
        panX: state.panX,
        panY: state.panY
      };
    } else if (points.length === 2) {
      state.pinchStart = {
        distance: pointerDistance(points),
        zoom: state.zoom
      };
    }
  }

  function onPointerMove(event) {
    if (!state.pointers.has(event.pointerId)) return;
    state.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    const points = [...state.pointers.values()];
    if (points.length === 1 && state.dragStart) {
      const scale = canvasScale();
      state.panX = state.dragStart.panX + (event.clientX - state.dragStart.x) * scale;
      state.panY = state.dragStart.panY + (event.clientY - state.dragStart.y) * scale;
      clampPan();
      renderPreview();
    } else if (points.length === 2 && state.pinchStart) {
      const distance = pointerDistance(points);
      state.zoom = Math.max(
        MIN_ZOOM,
        Math.min(MAX_ZOOM, state.pinchStart.zoom * distance / state.pinchStart.distance)
      );
      elements.zoomSlider.value = String(state.zoom);
      elements.zoomValue.textContent = `${Math.round(state.zoom * 100)}%`;
      clampPan();
      renderPreview();
    }
  }

  function onPointerUp(event) {
    state.pointers.delete(event.pointerId);

    if (state.pointers.size === 1) {
      const remaining = [...state.pointers.values()][0];
      state.dragStart = {
        x: remaining.x,
        y: remaining.y,
        panX: state.panX,
        panY: state.panY
      };
    } else {
      state.dragStart = null;
      state.pinchStart = null;
    }
  }

  function openExportSheet(mode = "photo") {
    if (frames[state.frameIndex].type === "image" && !frames[state.frameIndex].image) {
      showToast(text("frameLoading"));
      return;
    }
    state.exportMode = mode;
    elements.exportSheet.hidden = false;
  }

  function closeExportSheet() {
    elements.exportSheet.hidden = true;
  }

  function isMobileDevice() {
    const userAgent = navigator.userAgent;
    const mobileClientHint = navigator.userAgentData?.mobile === true;
    const mobileUserAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);
    const touchEnabledIPad = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1;
    return mobileClientHint || mobileUserAgent || touchEnabledIPad;
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  async function exportImage(size) {
    const filenamePrefix = state.exportMode === "blank"
      ? "bringvalkoback-blank"
      : "bringvalkoback-avatar";
    const filename = `${filenamePrefix}-${frames[state.frameIndex].id}.png`;
    const mobileDevice = isMobileDevice();
    let fileHandle = null;

    if (!mobileDevice && typeof window.showSaveFilePicker === "function") {
      try {
        fileHandle = await window.showSaveFilePicker({
          suggestedName: filename,
          types: [{
            description: "PNG image",
            accept: { "image/png": [".png"] }
          }]
        });
      } catch (error) {
        if (error.name === "AbortError") return;
        console.warn("Unable to open the Save As dialog; using a browser download instead.", error);
      }
    }

    closeExportSheet();
    showToast(text("preparing"));
    const outputCanvas = document.createElement("canvas");
    renderToCanvas(outputCanvas, size, {
      clipPhotoToCircle: true,
      forceBlank: state.exportMode === "blank"
    });
    const blob = await new Promise((resolve) => outputCanvas.toBlob(resolve, "image/png"));
    if (!blob) return;

    if (fileHandle) {
      try {
        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
        showSuccess();
        return;
      } catch (error) {
        console.warn("Unable to write the selected file; using a browser download instead.", error);
      }
    }

    const file = new File([blob], filename, { type: "image/png" });
    if (mobileDevice && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "#BRINGVALKOBACK" });
        showSuccess();
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    downloadBlob(blob, filename);
    showToast(text("downloadStarted"));
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  elements.uploadButton.addEventListener("click", showMaker);
  elements.canvasUploadButton.addEventListener("click", () => elements.photoInput.click());
  elements.homeButton.addEventListener("click", goHome);
  elements.photoInput.addEventListener("change", (event) => {
    loadPhoto(event.target.files?.[0]);
    event.target.value = "";
  });
  elements.saveButton.addEventListener("click", () => openExportSheet("photo"));
  elements.blankSaveButton.addEventListener("click", () => openExportSheet("blank"));
  elements.restartButton.addEventListener("click", restartMaker);
  elements.closeSheetButton.addEventListener("click", closeExportSheet);
  elements.exportSheet.addEventListener("click", (event) => {
    if (event.target === elements.exportSheet) closeExportSheet();
  });
  document.querySelectorAll("[data-export-size]").forEach((button) => {
    button.addEventListener("click", () => exportImage(Number(button.dataset.exportSize)));
  });

  elements.zoomSlider.addEventListener("input", (event) => {
    updateZoomFromSlider(Number(event.target.value));
  });
  elements.zoomSlider.addEventListener("pointerdown", beginZoomInteraction);
  elements.zoomSlider.addEventListener("pointerup", endZoomInteraction);
  elements.zoomSlider.addEventListener("pointercancel", endZoomInteraction);
  elements.zoomSlider.addEventListener("lostpointercapture", endZoomInteraction);
  elements.zoomSlider.addEventListener("blur", endZoomInteraction);

  elements.canvasWrap.addEventListener("pointerdown", onPointerDown);
  elements.canvasWrap.addEventListener("pointermove", onPointerMove);
  elements.canvasWrap.addEventListener("pointerup", onPointerUp);
  elements.canvasWrap.addEventListener("pointercancel", onPointerUp);

  setLanguage(state.language);
  loadFrames();
  startHomeFrameRotation();
})();
