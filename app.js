(() => {
  "use strict";

  const COPY = {
    zh: {
      title: "頭像框小工具",
      campaignBefore: "敖尹的加入，也是",
      gameTitle: "《戀與深空》",
      campaignAfter: "長期內容規劃中的一環。",
      campaignTeam: "製作組",
      campaignDate: "，2026.06.28",
      introLine1: "將你的照片套上頭像框，",
      introLine2: "換上新的大頭貼為敖尹應援吧！",
      home: "回首頁",
      privacy: "照片只在你的裝置上處理，不會上傳。",
      frameTitle: "選擇頭像框",
      dragHint: "拖曳移動 · 雙指縮放",
      zoom: "縮放",
      start: "開始製作",
      startLabel: "開始製作頭像框",
      choosePhoto: "選擇照片",
      loadingPhoto: "讀取照片中…",
      choosePhotoLabel: "從裝置選擇照片",
      uploadHint: "支援 JPG、PNG 與手機相簿照片",
      save: "儲存圖片",
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
      exportCopy: "PNG 格式，適合保存與分享。",
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
      title: "Avatar Frame Maker",
      campaignBefore: "The development of Valko and his related content is part of the long-term content plan for",
      gameTitle: "Love and Deepspace",
      campaignAfter: ".",
      campaignTeam: "Development Team",
      campaignDate: ", June 28, 2026",
      introLine1: "Frame your photo and update your profile.",
      introLine2: "Show your support for Valko!",
      home: "Home",
      privacy: "Your photo stays on your device and is never uploaded.",
      frameTitle: "Choose a frame",
      dragHint: "Drag to move · Pinch to zoom",
      zoom: "Zoom",
      start: "Start creating",
      startLabel: "Start making an avatar frame",
      choosePhoto: "Choose a photo",
      loadingPhoto: "Loading photo…",
      choosePhotoLabel: "Choose a photo from your device",
      uploadHint: "JPG, PNG, or a photo from your library",
      save: "Save image",
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
      exportCopy: "Saved as PNG, ready to share.",
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
      src: "assets/frame-wolf-howl-bringvalkoback.png?v=20260801-3",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "wolf-howl-valkoisloved",
      nameKey: "frameWolfLoved",
      type: "image",
      src: "assets/frame-wolf-howl-valkoisloved.png?v=20260801-3",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "lily-bringvalkoback",
      nameKey: "frameLilyBring",
      type: "image",
      src: "assets/frame-lily-bringvalkoback.png?v=20260801-3",
      image: null,
      bounds: null,
      fallbackBounds: { x: 47, y: 35, width: 1953, height: 1978 }
    },
    {
      id: "lily-valkoisloved",
      nameKey: "frameLilyLoved",
      type: "image",
      src: "assets/frame-lily-valkoisloved.png?v=20260801-3",
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
    pinchStart: null
  };

  const elements = {
    uploadScreen: document.querySelector("#uploadScreen"),
    photoScreen: document.querySelector("#photoScreen"),
    editorScreen: document.querySelector("#editorScreen"),
    brandLabel: document.querySelector("#brandLabel"),
    homeButton: document.querySelector("#homeButton"),
    photoInput: document.querySelector("#photoInput"),
    uploadButton: document.querySelector("#uploadButton"),
    choosePhotoButton: document.querySelector("#choosePhotoButton"),
    canvasWrap: document.querySelector("#canvasWrap"),
    canvas: document.querySelector("#previewCanvas"),
    gestureHint: document.querySelector("#gestureHint"),
    zoomSlider: document.querySelector("#zoomSlider"),
    zoomValue: document.querySelector("#zoomValue"),
    saveButton: document.querySelector("#saveButton"),
    restartButton: document.querySelector("#restartButton"),
    frameList: document.querySelector("#frameList"),
    frameName: document.querySelector("#frameName"),
    frameIndex: document.querySelector("#frameIndex"),
    exportSheet: document.querySelector("#exportSheet"),
    closeSheetButton: document.querySelector("#closeSheetButton"),
    toast: document.querySelector("#toast"),
    successOverlay: document.querySelector("#successOverlay")
  };

  const previewContext = elements.canvas.getContext("2d", { alpha: false });

  function text(key) {
    return COPY[state.language][key];
  }

  function setLanguage(language) {
    state.language = language;
    localStorage.setItem("bringvalkoback-language", language);
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
    document.title = language === "zh"
      ? "頭像框小工具｜BRING VALKO BACK"
      : "Avatar Frame Maker | BRING VALKO BACK";

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = text(node.dataset.i18n);
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    elements.uploadButton.setAttribute("aria-label", text("startLabel"));
    updatePhotoStepUI();
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
    const maxX = Math.max(0, (metrics.width - OUTPUT_SIZE) / 2);
    const maxY = Math.max(0, (metrics.height - OUTPUT_SIZE) / 2);
    state.panX = Math.max(-maxX, Math.min(maxX, state.panX));
    state.panY = Math.max(-maxY, Math.min(maxY, state.panY));
  }

  function renderToCanvas(canvas, size) {
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d", { alpha: false });
    context.clearRect(0, 0, size, size);
    context.fillStyle = "#342722";
    context.fillRect(0, 0, size, size);

    if (state.photo) {
      const metrics = getImageMetrics(size);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(
        state.photo,
        metrics.centerX - metrics.width / 2,
        metrics.centerY - metrics.height / 2,
        metrics.width,
        metrics.height
      );
    }

    const frame = frames[state.frameIndex];
    if (frame.type === "image" && frame.image) {
      drawFittedFrame(context, frame, size);
    }
  }

  function renderPreview() {
    renderToCanvas(elements.canvas, OUTPUT_SIZE);
  }

  function resetTransform() {
    state.zoom = 1;
    state.panX = 0;
    state.panY = 0;
    elements.zoomSlider.value = "1";
    elements.zoomValue.textContent = "100%";
    renderPreview();
  }

  function loadPhoto(file) {
    if (!file) return;
    const loadToken = ++state.photoLoadToken;
    state.photoLoading = true;
    updatePhotoStepUI();
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
      updatePhotoStepUI();
      resetTransform();
      elements.photoScreen.hidden = true;
      elements.editorScreen.hidden = false;
      renderFrameOptions();
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      if (loadToken !== state.photoLoadToken) return;
      state.photoLoading = false;
      updatePhotoStepUI();
      showToast(text("invalidImage"));
    };
    image.src = url;
  }

  function updatePhotoStepUI() {
    elements.choosePhotoButton.textContent = state.photoLoading
      ? text("loadingPhoto")
      : text("choosePhoto");
    elements.choosePhotoButton.disabled = state.photoLoading;
    elements.choosePhotoButton.setAttribute("aria-label", text("choosePhotoLabel"));
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
    elements.photoScreen.hidden = true;
    elements.uploadScreen.hidden = false;
    elements.homeButton.hidden = true;
    elements.brandLabel.hidden = false;
    closeExportSheet();
    resetTransform();
    updatePhotoStepUI();
  }

  function showPhotoStep() {
    elements.uploadScreen.hidden = true;
    elements.photoScreen.hidden = false;
    elements.editorScreen.hidden = true;
    elements.brandLabel.hidden = true;
    elements.homeButton.hidden = false;
    updatePhotoStepUI();
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
    elements.editorScreen.hidden = true;
    elements.photoScreen.hidden = false;
    elements.brandLabel.hidden = true;
    elements.homeButton.hidden = false;
    updatePhotoStepUI();
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
      state.zoom = Math.max(1, Math.min(3, state.pinchStart.zoom * distance / state.pinchStart.distance));
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

  function openExportSheet() {
    if (frames[state.frameIndex].type === "image" && !frames[state.frameIndex].image) {
      showToast(text("frameLoading"));
      return;
    }
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
    const filename = `bringvalkoback-avatar-${frames[state.frameIndex].id}.png`;
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
    renderToCanvas(outputCanvas, size);
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

  elements.uploadButton.addEventListener("click", showPhotoStep);
  elements.choosePhotoButton.addEventListener("click", () => elements.photoInput.click());
  elements.homeButton.addEventListener("click", goHome);
  elements.photoInput.addEventListener("change", (event) => {
    loadPhoto(event.target.files?.[0]);
    event.target.value = "";
  });
  elements.saveButton.addEventListener("click", openExportSheet);
  elements.restartButton.addEventListener("click", restartMaker);
  elements.closeSheetButton.addEventListener("click", closeExportSheet);
  elements.exportSheet.addEventListener("click", (event) => {
    if (event.target === elements.exportSheet) closeExportSheet();
  });
  document.querySelectorAll("[data-export-size]").forEach((button) => {
    button.addEventListener("click", () => exportImage(Number(button.dataset.exportSize)));
  });

  elements.zoomSlider.addEventListener("input", (event) => {
    state.zoom = Number(event.target.value);
    elements.zoomValue.textContent = `${Math.round(state.zoom * 100)}%`;
    clampPan();
    renderPreview();
  });

  elements.canvasWrap.addEventListener("pointerdown", onPointerDown);
  elements.canvasWrap.addEventListener("pointermove", onPointerMove);
  elements.canvasWrap.addEventListener("pointerup", onPointerUp);
  elements.canvasWrap.addEventListener("pointercancel", onPointerUp);

  setLanguage(state.language);
  loadFrames();
})();
