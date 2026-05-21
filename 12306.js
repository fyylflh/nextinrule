let placementNo = "";

try {
  const reqBody = typeof $request !== "undefined" ? $request.body : "";
  placementNo = JSON.parse(reqBody || "{}").placementNo || "";
} catch (e) {}

let result;

if (placementNo === "0007") {
  result = {
    materialsList: [{ billMaterialsId: "6491", filePath: "ddgksf2013", creativeType: 1 }],
    advertParam: { skipTime: 1 },
    code: "00"
  };
} else if (placementNo === "G0054") {
  result = { code: "00", materialsList: [{}] };
} else {
  result = { code: "00", message: "无广告返回" };
}

$done({ body: JSON.stringify(result) });