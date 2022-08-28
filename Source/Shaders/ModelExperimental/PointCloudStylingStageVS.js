//This file is automatically rebuilt by the Cesium build process.
export default "float getPointSizeFromAttenuation(vec3 positionEC) {\n\
  // Variables are packed into a single vector to minimize gl.uniformXXX() calls\n\
  float pointSize = model_pointCloudParameters.x;\n\
  float geometricError = model_pointCloudParameters.y;\n\
  float depthMultiplier = model_pointCloudParameters.z;\n\
\n\
  float depth = -positionEC.z;\n\
  return min((geometricError / depth) * depthMultiplier, pointSize);\n\
}\n\
\n\
#ifdef HAS_POINT_CLOUD_SHOW_STYLE\n\
float pointCloudShowStylingStage(in ProcessedAttributes attributes, in Metadata metadata) {\n\
  float tiles3d_tileset_time = model_pointCloudParameters.w;\n\
  return float(getShowFromStyle(attributes, metadata, tiles3d_tileset_time));\n\
}\n\
#endif\n\
\n\
#ifdef HAS_POINT_CLOUD_COLOR_STYLE\n\
vec4 pointCloudColorStylingStage(in ProcessedAttributes attributes, in Metadata metadata) {\n\
  float tiles3d_tileset_time = model_pointCloudParameters.w;\n\
  return getColorFromStyle(attributes, metadata, tiles3d_tileset_time);\n\
}\n\
#endif\n\
\n\
#ifdef HAS_POINT_CLOUD_POINT_SIZE_STYLE\n\
float pointCloudPointSizeStylingStage(in ProcessedAttributes attributes, in Metadata metadata) {\n\
  float tiles3d_tileset_time = model_pointCloudParameters.w;\n\
  return float(getPointSizeFromStyle(attributes, metadata, tiles3d_tileset_time));\n\
}\n\
#elif defined(HAS_POINT_CLOUD_ATTENUATION)\n\
float pointCloudPointSizeStylingStage(in ProcessedAttributes attributes, in Metadata metadata) {\n\
  return getPointSizeFromAttenuation(v_positionEC);\n\
}\n\
#endif";
