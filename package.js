Package.describe({
	summary: "Three.js core library + several useful extensions from the examples folder.",
	version: "0.73.3",
	name: "chfritz:three",
	git: "https://github.com/chfritz/meteor-three.git",
});

Package.on_use(function(api) {
	api.versionsFrom("0.9.0");
	api.export("THREE");

	api.add_files([
		// Core
		"lib/three.js",

		// Loaders
        "extras/loaders/AMFLoader.js",
        "extras/loaders/AssimpJSONLoader.js",
        "extras/loaders/AWDLoader.js",
        "extras/loaders/BabylonLoader.js",
        "extras/loaders/BinaryLoader.js",
        "extras/loaders/ColladaLoader.js",
        "extras/loaders/ColladaLoader2.js",
        "extras/loaders/DDSLoader.js",
        "extras/loaders/KMZLoader.js",
        "extras/loaders/MD2Loader.js",
        "extras/loaders/MTLLoader.js",
        "extras/loaders/OBJLoader.js",
        "extras/loaders/OBJMTLLoader.js",
        "extras/loaders/PDBLoader.js",
        "extras/loaders/PLYLoader.js",
        "extras/loaders/PVRLoader.js",
        "extras/loaders/RGBELoader.js",
        "extras/loaders/STLLoader.js",
        "extras/loaders/SVGLoader.js",
        "extras/loaders/TGALoader.js",
        "extras/loaders/UTF8Loader.js",
        "extras/loaders/VRMLLoader.js",
        "extras/loaders/VTKLoader.js",

		// There doesn't appear to be a good way to package worker scripts in Meteor ATM,
		// so you can either move these files into public yourself or just use the
		// single threaded CTM Loader:
		// "extras/loaders/ctm/CTMWorker.js",
		// "extras/loaders/ctm/ctm.js",
		// "extras/loaders/ctm/lzma.js",

		// Exporters
		"extras/exporters/STLBinaryExporter.js",
		"extras/exporters/STLExporter.js",
		"extras/exporters/OBJExporter.js",

		// Controls
		"extras/controls/TrackballControls.js",
		"extras/controls/OrbitControls.js",

		// PostProcessing
		"extras/postprocessing/BloomPass.js",
		"extras/postprocessing/BokehPass.js",
		"extras/postprocessing/DotScreenPass.js",
		"extras/postprocessing/EffectComposer.js",
		"extras/postprocessing/FilmPass.js",
		"extras/postprocessing/GlitchPass.js",
		"extras/postprocessing/MaskPass.js",
		"extras/postprocessing/RenderPass.js",
		"extras/postprocessing/SavePass.js",
		"extras/postprocessing/ShaderPass.js",
		"extras/postprocessing/TexturePass.js",

		// Shaders
		"extras/shaders/BasicShader.js",
		"extras/shaders/BleachBypassShader.js",
		"extras/shaders/BlendShader.js",
		"extras/shaders/BokehShader.js",
		"extras/shaders/BokehShader2.js",
		"extras/shaders/BrightnessContrastShader.js",
		"extras/shaders/ColorCorrectionShader.js",
		"extras/shaders/ColorifyShader.js",
		"extras/shaders/ConvolutionShader.js",
		"extras/shaders/CopyShader.js",
		"extras/shaders/DigitalGlitch.js",
		"extras/shaders/DOFMipMapShader.js",
		"extras/shaders/DotScreenShader.js",
		"extras/shaders/EdgeShader.js",
		"extras/shaders/EdgeShader2.js",
		"extras/shaders/FilmShader.js",
		"extras/shaders/FocusShader.js",
		"extras/shaders/FresnelShader.js",
		"extras/shaders/FXAAShader.js",
		"extras/shaders/HorizontalBlurShader.js",
		"extras/shaders/HorizontalTiltShiftShader.js",
		"extras/shaders/HueSaturationShader.js",
		"extras/shaders/KaleidoShader.js",
		"extras/shaders/LuminosityShader.js",
		"extras/shaders/MirrorShader.js",
		"extras/shaders/NormalMapShader.js",
		"extras/shaders/OceanShaders.js",
		"extras/shaders/ParallaxShader.js",
		"extras/shaders/RGBShiftShader.js",
		"extras/shaders/SepiaShader.js",
		"extras/shaders/SSAOShader.js",
		"extras/shaders/TechnicolorShader.js",
		"extras/shaders/TriangleBlurShader.js",
		"extras/shaders/UnpackDepthRGBAShader.js",
		"extras/shaders/VerticalBlurShader.js",
		"extras/shaders/VerticalTiltShiftShader.js",
		"extras/shaders/VignetteShader.js",

		// THREE.Projector is now here.
		"extras/renderers/Projector.js",

        // geometries
        "extras/geometries/ConvexGeometry.js",
        "extras/geometries/DecalGeometry.js",
        "extras/geometries/hilbert2D.js",
        "extras/geometries/hilbert3D.js",
        "extras/geometries/TeapotBufferGeometry.js",
        "extras/geometries/TextGeometry.js",

        "extras/utils/FontUtils.js",
        "extras/utils/GeometryUtils.js",
        "extras/utils/ImageUtils.js",
        "extras/utils/ShadowMapViewer.js",
        "extras/utils/UVsDebug.js"        
        
	]);
});
