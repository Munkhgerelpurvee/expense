"use client";

import Link from "next/link";
import { CardLogo } from "@/assets/cardLogo";
import { Payway } from "@/assets/payWay";
import { GreenDot } from "@/assets/greenDot";
import { GreenUp } from "@/assets/greenUp";
import { GreenDown } from "@/assets/greenDown";
import { Eye, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import * as Icons from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { CircleChart } from "@/components/circleChart";
import { useAuth } from "@/components/providers/AuthProvider";
import { AccountContext } from "@/components/context";
import { useContext, useEffect } from "react";

export default function Home() {
  const {
    accounts,
    setAccounts,
    deleteAccount,
    selectedAccountId,
    setSelectedAccountId,
  } = useContext(AccountContext);
  // const { totalAmount, setTotalAmount } = useAuth();
  // const handleTotalAmountChange = (amount) => {
  //   setTotalAmount(amount);
  // };

  // Begin
  const getStartAndEndOfMonth = () => {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    return { startDate, endDate };
  };

  //
  //  Хувьсагч зарлав
  const { startDate, endDate } = getStartAndEndOfMonth();
  //
  const thisMonthAccounts = accounts.filter((account) => {
    const accountDate = new Date(account.date || "2024-01-01");
    return accountDate >= startDate && accountDate <= endDate;
  });
  // By Chatgpt
  // Энэ кодын хэсэг нь accounts хэмээх массив дахь дансны объектыг шүүж, тодорхой хугацааны хооронд хамаарах дансуудыг олоход ашиглагддаг. Тайлбарлахдаа нэг нэгээр нь харъя: accounts.filter((account) => { ... }):

  // filter функц нь массив дээрх элементүүдийг шүүнэ. Тодруулбал, accounts массив дахь бүх account объектыг авч үзээд, өгсөн нөхцлийг хангаж буй элементүүдийг шинэ массив руу шилжүүлнэ. Энэ шинжилгээг хийхэд account обьект болгон шалгана.
  // const accountDate = new Date(account.date || "2024-01-01");:

  // Энэ мөр нь account объектын date шинж чанарыг ашиглан шинэ Date объект үүсгэнэ.
  // Хэрвээ account.date утга байхгүй (үнэндээ null, undefined, эсвэл хоосон утга байвал), Date объектыг "2024-01-01" гэж үүсгэнэ. Энэ нь хэрвээ account.date тодорхойгүй байвал үүссэн огноо нь 2024 оны 1-р сарын 1 байх болно.
  // return accountDate >= startDate && accountDate <= endDate;:

  // accountDate (тус бүрийн дансны огноо) нь startDate болон endDate хооронд байх ёстой гэдгийг шалгана.
  // >= оператор нь accountDate нь startDate-аас илүү буюу тэнцүү байгааг шалгадаг.
  // <= оператор нь accountDate нь endDate-ээс бага буюу тэнцүү байгааг шалгадаг.
  // Хэрвээ аль алинд нь тэнцэж байвал, тэр дансыг шинэ массивад оруулна.
  // Эцсийн дүнд, thisMonthAccounts массив нь accounts массив дахь date утга нь startDate болон endDate хооронд оршдог бүх дансуудыг агуулсан байх болно.

  // Товчоор хэлбэл: Энэ код нь тодорхой нэг хугацааны (дараах өдрүүд) дотор оршиж буй дансуудыг шүүж, шинэ массив үүсгэх зориулалттай.

  const getStartAndEndOfLastMonth = () => {
    const now = new Date();
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    return { startOfLastMonth, endOfLastMonth };
  };
  // By Chatgpt
  // Мэдээж, энэ код нь сүүлийн сарын эхний болон сүүлийн өдрийг тодорхойлж, тэдгээрийг объект хэлбэрээр буцаадаг функц юм. Дэлгэрэнгүй тайлбарлая:

  // 1. const now = new Date();
  // Энэ мөр нь одоогийн огноог агуулсан Date объектыг үүсгэнэ.
  // now хувьсагч нь энэ мөчийн огноо болон цагийг агуулна.
  // 2. const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  // new Date(now.getFullYear(), now.getMonth() - 1, 1):
  // new Date() конструктор нь Date объект үүсгэнэ.
  // now.getFullYear() нь одоогийн оны утгыг авна (жишээлбэл, 2024).
  // now.getMonth() - 1 нь одоогийн сарнаас нэг сар хасаж, сүүлийн сарын тоог авна. Жишээлбэл, одоогийн сар 8 бол энэ нь 7-р сар (нягтлан бодогчид -1 гэдэг нь).
  // 1 нь энэ сарын 1-ний өдрийг заана.
  // Ингээд startOfLastMonth хувьсагч нь сүүлийн сарын эхний өдрийг агуулсан Date объект болно.
  // 3. const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
  // new Date(now.getFullYear(), now.getMonth(), 0):
  // Энэ нь одоогийн сарны 0-р өдрийг заана, энэ нь тухайн сарын сүүлийн өдрийг илэрхийлдэг.
  // now.getFullYear() нь одоогийн оны утгыг авна.
  // now.getMonth() нь одоогийн сарын утгыг авна (жишээлбэл, 8-р сар).
  // 0 гэдэг нь одоогийн сарын эхний өдөр биш, харин өмнөх сарын сүүлийн өдрийг заана. Учир нь, Date объект дахь өдрийн утга 0 байх нь сарын сүүлийн өдрийг илэрхийлдэг.
  // Ингээд endOfLastMonth хувьсагч нь сүүлийн сарын сүүлийн өдрийг агуулсан Date объект болно.
  // 4. return { startOfLastMonth, endOfLastMonth };
  // Функцийн доторх return оператор нь startOfLastMonth болон endOfLastMonth хоёр Date объектыг агуулсан объект буцаана.
  // Буцаасан объект нь хоёр шинж чанартай: startOfLastMonth (сүүлийн сарын эхний өдөр) болон endOfLastMonth (сүүлийн сарын сүүлийн өдөр).
  // Товчоор
  // Энэ функц нь одоогийн огнооны үндсэн дээр сүүлийн сарын эхний болон сүүлийн өдрийг тодорхойлж, эдгээр огноог агуулсан объектыг буцаадаг. Энэ нь сүүлийн сарын дата тайлбарлах, шинжилгээ хийх, тооцоолох зэрэгт ашиглагдаж болно.

  //
  //  Хувьсагч зарлав
  const { startOfLastMonth, endOfLastMonth } = getStartAndEndOfLastMonth();
  //
  const lastMonthAccounts = accounts.filter((account) => {
    const accountDate = new Date(account.date || "2024-01-01");
    return accountDate >= startOfLastMonth && accountDate <= endOfLastMonth;
  });
  // By Chatgpt

  // Энэ код нь accounts массив дахь дансны огноог шалган, сүүлийн сарын хугацаанд орших дансуудыг шүүх зориулалттай. Дэлгэрэнгүйгээр тайлбарлая.
  // Кодын Хэсэг:
  //   1. accounts.filter((account) => { ... })
  // filter функц нь массив дахь бүх элементүүдийг авч үзэж, өгсөн нөхцлийг хангаж буй элементүүдийг шинэ массив руу оруулна.
  // accounts массив дахь бүх account объектын хувьд функц доторхи нөхцлийг шалгана.
  //   2. const accountDate = new Date(account.date || "2024-01-01");
  // account.date нь тухайн дансны огноог агуулсан байх ёстой. Гэхдээ хэрэв энэ утга байхгүй (жишээ нь, null, undefined, эсвэл хоосон утга), Date объектын конструкторт "2024-01-01" утга ашиглана.
  // new Date(account.date || "2024-01-01"):
  // account.date орж ирэхгүй бол, "2024-01-01" гэж өгсөн утга нь эхний огноо (2024 оны 1-р сарын 1) нь Date объект болгоно.
  // accountDate хувьсагч нь уг дансны огноог агуулсан Date объект болох бөгөөд, хэрэв account.date байхгүй бол, "2024-01-01" гэж тодорхойлогдсон байна.
  //   3. return accountDate >= startOfLastMonth && accountDate <= endOfLastMonth;
  // Энэ нөхцөл нь accountDate нь startOfLastMonth болон endOfLastMonth хооронд байх ёстой гэдгийг шалгадаг.
  // accountDate >= startOfLastMonth:
  // accountDate нь startOfLastMonth-аас их буюу тэнцүү байх ёстой.
  // accountDate <= endOfLastMonth:
  // accountDate нь endOfLastMonth-аас бага буюу тэнцүү байх ёстой.
  // Хэрэв энэ хоёр нөхцөлийг аль аль нь хангаж байвал, тухайн account объект нь lastMonthAccounts массивад орно.
  //   4. const lastMonthAccounts = ...
  // filter функцийн үр дүнд, бүх account объектуудыг шалгаж, startOfLastMonth ба endOfLastMonth хооронд байршилтай байгаа дансуудыг агуулсан шинэ массивыг үүсгэнэ.
  // Энэ шинэ массивыг lastMonthAccounts хувьсагчид хадгална.
  //   Товчоор:
  // Энэ код нь accounts массив дахь дансны огноог шалган, сүүлийн сарын хугацаанд оршиж буй бүх дансуудыг шүүхэд хэрэглэгддэг. Тодруулбал:

  // Сүүлийн сарын огнооны хязгаарыг тодорхойлсон:

  // startOfLastMonth (сүүлийн сарын эхний өдөр) болон endOfLastMonth (сүүлийн сарын сүүлийн өдөр).
  // Шүүх үйлдлийг гүйцэтгэдэг:

  // Дансуудын огноо эдгээр хязгаарын дотор байгаа эсэхийг шалгаж, тэдгээрийг шинэ массив руу оруулна.
  // Тус код нь тухайн хугацааны дотор байгаа дансуудыг олоход ашиглагддаг бөгөөд энэ нь сүүлийн сарын дотоод тайлан, шинжилгээ хийхэд хэрэглэж болно.

  //
  const incomeSumLastMonth = lastMonthAccounts
    .filter((account) => account.type === "inc") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0); // Sum the amount of filtered accounts
  // By Chatgpt
  //Энэ код нь lastMonthAccounts массив дахь орлогын дүнг олох үйлдлийг гүйцэтгэдэг. lastMonthAccounts массив нь сүүлийн сарын хугацаанд оршиж буй дансуудыг агуулдаг гэж өмнө тодорхойлсон. Энэ код нь орлогын дүнг олж авахад хэрхэн ажилладаг болохыг дэлгэрэнгүй тайлбарлая:

  // Кодын Хэсэг:
  //   1. lastMonthAccounts.filter((account) => account.type === "inc")
  // filter функц нь lastMonthAccounts массив дахь бүх account объектуудыг шүүж, тухайн дансны type нь "inc" (орлогын төрөл) гэдэг нөхцлийг хангаж байгаа дансуудыг шинэ массив руу шилжүүлнэ.
  // account.type === "inc": Энэ шалгалт нь account объектын type шинж чанарыг "inc" гэж тодорхойлсон утга (орлогын төрөл) эсэхийг шалгадаг.
  // Үр дүнд нь, орлогын төрөлтэй бүх дансуудыг агуулсан шинэ массив үүсгэгдэнэ.
  //   2. .reduce((acc, account) => acc + (account.amount || 0), 0)
  // reduce функц нь массив доторх бүх элементүүдийг нэгтгэнэ.

  // Энэ функц нь дараах зүйлсийг гүйцэтгэдэг:

  // acc (аккумулятор) ба account (одоо харагдаж буй данс) хувьсагчдыг ашиглана.
  // (account.amount || 0) нь account.amount утга байдаг эсэхийг шалгаж, утга байхгүй бол 0-ийг ашиглана.
  // acc + (account.amount || 0) нь acc-г сүүлийн account.amount утга нэмэхдээ хэрэглэнэ.
  // 0: reduce функцийн хоёрдахь аргумент нь аккумуляторын анхны утга, энэ тохиолдолд 0.

  // Энэ reduce функц нь бүх орлогын дүнг нэгтгэн, үр дүнд нь сүүлийн сарын орлогын нийт дүнг олно.
  //   3. const incomeSumLastMonth = ...
  // incomeSumLastMonth хувьсагч нь сүүлийн сарын орлогын нийт дүнг хадгална.
  // Товчоор:
  // Энэхүү код нь lastMonthAccounts массив доторх орлогын дансуудын нийт дүнг олоход зориулсан:

  // Орлогын төрөлтэй дансуудыг шүүж авна:

  // account.type нь "inc" байх ёстой.
  // Тэр дансуудын amount утгуудыг нэгтгэн нийлүүлнэ:

  // Хэрвээ amount утга байхгүй бол 0-г хэрэглэнэ.
  // reduce функц ашиглан бүх орлогын утгуудыг нийлүүлнэ.
  // Эцсийн дүнг incomeSumLastMonth хувьсагчид хадгална.

  // Энэхүү код нь сүүлийн сарын орлогын дүнг тооцоолоход ашиглагддаг бөгөөд энэ нь санхүүгийн тайлан, дүн шинжилгээ хийхэд хэрэгтэй мэдээллийг гаргахад зориулагдсан.

  const incomeSum = thisMonthAccounts
    .filter((account) => account.type === "inc") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0); // Sum the amount of filtered accounts

  const expenseSumLastMonth = lastMonthAccounts
    .filter((account) => account.type === "exp") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0);
  const expenseSum = thisMonthAccounts
    .filter((account) => account.type === "exp") // Filter accounts where type is "inc"
    .reduce((acc, account) => acc + (account.amount || 0), 0); // Sum the amount of filtered accounts
  //
  // By Chatgpt
  const incPercentage = (
    ((incomeSum - incomeSumLastMonth) / incomeSumLastMonth) *
    100
  ).toFixed(2);

  // By Chatgpt
  //   Энэ код нь зардлын хувь хэмжээг тооцоолох бөгөөд сүүлийн сар болон одоогийн сард зарлага (зардал) хэрхэн өөрчлөгдсөнийг харуулахад ашиглагддаг. Энд expenseSum болон expenseSumLastMonth гэсэн хоёр хувьсагчийн утгуудыг ашиглан тооцоолол хийж байна. Дэлгэрэнгүй тайлбарлая:
  //   1. expenseSum - expenseSumLastMonth
  // Энэ хэсэг нь одоогийн сард зарлага (expenseSum) болон сүүлийн сард зарлага (expenseSumLastMonth) хоорондын ялгааг тооцоолно.
  // Үр дүн нь зарлагын өсөлт буюу бууралттай холбоотой.
  // 2. ((expenseSum - expenseSumLastMonth) / expenseSumLastMonth)
  // expenseSum - expenseSumLastMonth:

  // Өссөн буюу буурсан зарлагын хэмжээг илэрхийлнэ.
  // / expenseSumLastMonth:

  // Зарлага хэрхэн хувь хэмжээгээр нэмэгдсэн эсвэл буурсан болохыг сүүлийн сарын зарлагын дүнгийн хувьд харуулна.
  // Энэ хэсэг нь хувь хэмжээг тооцоолох формула. Хэрэв үр дүн эерэг бол зарлага өссөн, хэрэв сөрөг бол буурсан байгааг илтгэнэ.
  //   3. ((expenseSum - expenseSumLastMonth) / expenseSumLastMonth) * 100
  // * 100:
  // Хувь хэмжээг хүлээн зөвшөөрөх хэлбэрт хөрвүүлэхийн тулд 100-гаар үржүүлнэ. Жишээлбэл, 0.25 нь 25% байх болно.
  // 4. .toFixed(2)
  // .toFixed(2):
  // Хувь хэмжээг хоёр аравтын оронтой болгоно. Энэ нь хувь хэмжээг хоёр цэгтэй тоогоор үзүүлдэг.
  // Жишээлбэл, 25.678 нь 25.68 болгоно.
  // 5. const expPercentage = ...
  // expPercentage:
  // Эцсийн хувь хэмжээг хадгална.
  // Товчоор:
  // Энэ код нь сүүлийн сар болон одоогийн сард зарлага хэрхэн өөрчлөгдсөнийг хувь хэмжээгээр тооцоолох зориулалттай. Тус код нь дараах алхмуудыг гүйцэтгэдэг:

  // Зарлагын өөрчлөлтийг тооцоолно:

  // Одоо болон сүүлийн сарын зарлагын ялгааг олоно.
  // Өөрчлөлтийн хувь хэмжээг тооцоолно:

  // Зарлага хэрхэн хувь хэмжээгээр нэмэгдсэн эсвэл буурсан байгааг олно.
  // Хувь хэмжээг хоёр аравтын оронтой формат руу хөрвүүлнэ:

  // Хугацааны хувьд илүү нарийвчлалтай харуулахын тулд хоёр цэгтэй тоо болгоно.
  // Энэхүү хувь хэмжээг ашиглан, зарлагын өсөлт буюу бууралтыг үр дүнтэй хянах боломжтой.

  // Кодын Хэсэг:
  const expPercentage = (
    ((expenseSum - expenseSumLastMonth) / expenseSumLastMonth) *
    100
  ).toFixed(2);
  //
  const last5Accounts = accounts
    .slice(-5) // Get the last 5 elements
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // By Chatgpt
  //   Энэ код нь accounts массив дахь сүүлийн 5 дансыг авч, тэдгээрийг огноо буюу date шинж чанараар нь эрэмбэлэх зориулалттай. Дэлгэрэнгүй тайлбарлая:

  // Кодын Хэсэг:
  //   1. accounts.slice(-5)
  // .slice(-5):
  // slice функц нь массивын тодорхой хэсгийг авахад ашиглагддаг.
  // -5 параметр нь массивын сүүлийн 5 элементүүдийг авна гэсэн үг.
  // Энэ функц нь шинэ массив үүсгэнэ, үүнд зөвхөн сүүлийн 5 элементүүд агуулагдана. Хэрэв accounts массив нь 5-аас бага элементийг агуулж байвал, бүх элементүүдийг буцаана.
  // 2. .sort((a, b) => new Date(b.date) - new Date(a.date))
  // .sort((a, b) => ...):

  // sort функц нь массивыг тодорхой шалгууруудын дагуу эрэмбэлнэ.
  // a ба b бол сортлогдож буй элементүүд.
  // new Date(b.date) - new Date(a.date):

  // new Date(b.date) ба new Date(a.date):
  // b.date болон a.date утгуудыг Date объект руу хөрвүүлнэ.
  // b.date-ийг a.date-ээс хасах нь:
  // Хэрвээ b.date нь a.date-ээс том бол эерэг утга өгнө.
  // Хэрвээ b.date нь a.date-ээс жижиг бол сөрөг утга өгнө.
  // Эерэг утга нь b элементийг эхлүүлэх байрлалд байршуулах, харин сөрөг утга нь a элементийг эхлүүлэх байрлалд байршуулахад хүргэнэ.
  // Ингэснээр, массивыг хамгийн шинэ огноо (сүүлийн хугацааны) эхлүүлэх байрлалд авчирна.
  //   3. const last5Accounts = ...
  // last5Accounts:
  // Сүүлийн 5 дансыг огнооны дарааллаар нь эрэмбэлсэн шинэ массивыг хадгална.
  // Товчоор:
  // Энэ код нь дараах алхмуудыг гүйцэтгэдэг:

  // accounts массивын сүүлийн 5 элементүүдийг авна:

  // .slice(-5) ашиглан сүүлийн 5 дансыг авна.
  // Тэдгээрийг огноогоор нь эрэмбэлнэ:

  // .sort((a, b) => new Date(b.date) - new Date(a.date)) ашиглан хамгийн шинэ огноог эхэнд байрлуулж, дараа нь хуучин огноог байрлуулна.
  // Энэ код нь хамгийн сүүлийн 5 дансыг хамгийн шинэ огнооноос хамгийн хуучин огноо хүртэл эрэмбэлсэн массивыг үүсгэхэд хэрэглэгддэг. Энэ нь тухайн сүүлийн 5 дансны түүхийг хамгийн шинэ огнооны дагуу үзэхэд хэрэгтэй.

  const totalAmount = accounts.reduce(
    (acc, account) =>
      acc + (account.type === "exp" ? -account.amount : account.amount),
    0
  );
  // By Chatgpt

  // Энэ код нь accounts массив доторх дансуудын нийт дүнг тооцоолох зориулалттай. Тус код нь орлого ба зарлагаа ялгаж, тэдгээрийг нэгтгэнэ. Тодорхой тайлбарлаж үзье:

  // Кодын Хэсэг:
  //   1. .reduce((acc, account) => ...)
  // reduce функц нь массив доторх бүх элементүүдийг нэгтгэн, эцсийн утгыг гаргахад ашиглагддаг.
  // Энэ функц нь хоёр параметр авдаг: acc (аккумулятор) ба account (одоо харагдаж буй данс).
  // 2. (acc, account) => acc + (account.type === "exp" ? -account.amount : account.amount)
  // Энэ бол reduce функцийн callback функцийн үндсэн логик.

  // acc:

  // acc бол сүүлийн үеийн нийт дүнг хадгалдаг хувьсагч.
  // Анх 0 утгаар эхэлдэг, дараа нь зөвхөн орлого болон зарлагыг нэмж бүрдүүлнэ.
  // account:

  // Массив доторх одоогийн данс.
  // account.type === "exp" ? -account.amount : account.amount:

  // account.type нь "exp" (зарлага) байх үед, account.amount утгыг сөрөг утгаар хувиргана. Энэ нь зарлагыг бууруулах зорилготой.
  // Хэрэв account.type нь "exp" биш бол (жишээ нь "inc" орлого), account.amount-ийг шууд нэмж оруулна.
  // acc + ...:

  // Тус хэсэг нь acc (сүүлийн үеийн дүн) болон account.amount-ийг нэмж, дараагийн элементийг боловсруулахдаа энэ шинэ утгыг ашиглана.
  // 3. 0
  // 0:
  // reduce функцийн хоёр дахь параметр нь аккумуляторын анхны утга. Энэ тохиолдолд, аккумулятор 0 утгаас эхэлнэ.
  // Эхний элемент нь 0-д нэмж, дараагийн элементүүдийн утгыг агуулан шинэчилнэ.
  // 4. const totalAmount = ...
  // totalAmount:
  // reduce функцийн эцсийн дүнг хадгална. Энэ нь бүх орлого болон зарлагын нийлбэрийг харуулах болно.
  //   Товчоор:
  // Энэ код нь accounts массив доторх дансны нийт дүнг тооцоолохоос гадна, орлого ба зарлагыг ялгаж харгалзан үздэг:

  // Одоогийн дансны утгыг шалгана:

  // Хэрэв дансны төрөл "exp" бол зарлагын утгыг сөрөг утгаар хувиргана (бууруулна).
  // Хэрэв дансны төрөл "inc" бол орлогын утгыг шууд нэмнэ.
  // Нийт дүнг тооцоолно:

  // Эдгээр утгуудыг аккумулятор (acc) дээр нэмэгдүүлж, эцсийн дүнг гаргана.
  // Тус код нь санхүүгийн дүн шинжилгээ хийхэд, орлого болон зарлагын нийлбэрийг гаргах, мөн санхүүгийн ерөнхий төлөвийг ойлгоход ашиглагддаг.

  //
  const formatter = new Intl.NumberFormat("mn-MN", {
    // style: "currency",
    // currency: "MNT", // Use the appropriate currency code
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // By Chatgpt

  const formattedtotalAmount = formatter.format(totalAmount);
  const formattedincomeSum = formatter.format(incomeSum);
  const formattedexpenseSum = formatter.format(expenseSum);
  // By Chatgpt

  // Энэ код нь JavaScript-ийн Intl.NumberFormat класс ашиглан тоо үсэглэлийн форматчийг үүсгэж байна. Эцсийн формат нь Монгол улсын стандартын дагуу тоо хэрхэн харагдахыг тодорхойлно. Кодын тайлбар:

  // Кодын Хэсэг:
  //   1. new Intl.NumberFormat("mn-MN", { ... })
  // Intl.NumberFormat нь тоо болон мөнгөний форматчийг үүсгэх зориулалттай JavaScript-ийн стандарт класстай.
  // new Intl.NumberFormat("mn-MN", { ... }):
  // "mn-MN": Энэ нь форматчийн тохиргоог Монгол улсын стандарт (Монгол) хэл дээр тохирно.
  // { ... }: Хоёр дахь параметр нь форматчийн тохиргоог тодорхойлно.
  // 2. { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  // minimumFractionDigits: 2:

  // Энэ тохиргоо нь тоо үзүүлэлтийн дараах 2 тоо (арвантын орон) байхаар зааж байна.
  // Жишээлбэл, 1234.5 гэдэг тоо 1234.50 гэж харагдана.
  // maximumFractionDigits: 2:

  // Энэ тохиргоо нь тоо үзүүлэлтийн дараах хамгийн их 2 тоо (арвантын орон) байхаар зааж байна.
  // Жишээлбэл, 1234.567 гэдэг тоо 1234.57 гэж харагдана.
  // 3. // style: "currency", // currency: "MNT"
  // Хэрэв тайлбарласан хэсгүүдийг идэвхжүүлбэл, форматч нь мөнгөний форматчийн тохиргоог ашиглах болно.
  // style: "currency":
  // Энэ тохиргоо нь тоог мөнгөний хэлбэрээр форматлахад ашиглагддаг.
  // currency: "MNT":
  // Энэ тохиргоо нь Монгол төгрөг (MNT)-ийг мөнгөний форматчийн үндсэн валют болгон тодорхойлно.

  // NOTE
  //   Жишээ ашиглалт
  // Энэхүү форматчийг ашиглан тоо форматлах жишээ:
  // const amount = 1234.5678;
  // console.log(formatter.format(amount)); // Output: "1,234.57" (formatted number)
  //   Энд amount утгыг formatter ашиглан форматлахад, тоо 1,234.57 гэж харагдана.
  // Товчоор:
  // Энэ код нь Монгол улсын стандартын дагуу тоо форматлахад зориулсан форматчийг үүсгэдэг:

  // Олон тоо ба мөнгөний форматчилал:

  // Яг одоогийн код нь арвантын орон 2 цифртэй байхаар зааж, мөнгөний тохиргоог тайлбарлаж байна.
  // Өөрчлөлт хийх:

  // Хэрэв мөнгөний формат хэрэгтэй бол style болон currency тохиргоог идэвхжүүлэх шаардлагатай.
  // Энэхүү форматчийг тооны мэдээллийг хэрэглэгчид ойлгомжтой хэлбэрээр харагдуулахад ашиглаж болно.

  // Ended

  // Begining BarChart
  const chartData = [
    // { month: "January", Income: 186, Expense: 80 },
    // { month: "February", Income: 305, Expense: 200 },
    // { month: "March", Income: 237, Expense: 120 },
    { month: "April", Income: 2730, Expense: 1900 },
    { month: "May", Income: 2000, Expense: 1300 },
    { month: "June", Income: 3500, Expense: 4000 },
    { month: "July", Income: incomeSumLastMonth, Expense: expenseSumLastMonth },
    { month: "August", Income: incomeSum, Expense: expenseSum },
  ];
  const chartConfig = {
    Income: {
      label: "Income",
      color: "hsl(var(--chart-2))",
    },
    Expense: {
      label: "Expense",
      color: "hsl(var(--chart-1))",
    },
  };
  return (
    <main className="">
      <div className="h-full bg-gray-100">
        <div className="flex flex-col lg:w-[1220px] w-[390px] font-normal text-[16px] items-center justify-between m-auto pt-[32px] pb-[40px] gap-6">
          {/* F */}
          <div className="flex flex-row w-full gap-[24px]">
            {/*  */}
            <div className="flex-1 flex flex-col bg-[#0166FF] h-[216px] rounded-2xl px-[32px] py-[32px] justify-between relative">
              <img
                src="./noise.png"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
              />
              <div className="">
                <CardLogo />
              </div>
              <div className="relative z-10 flex justify-between ">
                <div className="flex flex-col">
                  <div className="text-white opacity-50">Cash</div>
                  <div className=" text-white text-[24px] font-semibold">
                    {formattedtotalAmount}₮
                  </div>
                </div>
                <div className="flex items-center">
                  {" "}
                  <Payway />
                </div>
              </div>
            </div>
            {/*  */}

            {/*  */}

            <div className="flex-1 flex flex-col bg-white h-[216px] rounded-2xl px-[24px] py-[24px]">
              <div className="flex pb-[16px] border-b-slate-400 border-b-[1px] gap-[8px]">
                <div className="flex items-center">
                  <GreenDot Color={"#84CC16"} />
                </div>
                <div className="font-semibold">Your Income This month</div>
              </div>
              <div className="flex flex-col  pt-[16px]">
                <div className="text-[36px] font-semibold">
                  {formattedincomeSum}₮
                </div>
                <div className="text-[18px] text-[#64748B]">
                  Your Income Amount
                </div>
                <div className="flex gap-2">
                  <div>{incPercentage < 0 ? <GreenDown /> : <GreenUp />}</div>
                  <div className="text-[18px]">
                    {incPercentage}% from last month
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex-1 flex flex-col bg-white h-[216px] rounded-2xl px-[24px] py-[24px]">
              <div className="flex pb-[16px] border-b-slate-400 border-b-[1px] gap-[8px]">
                <div className="flex items-center">
                  <GreenDot Color={"#0166FF"} />
                </div>
                <div className="font-semibold">Total Expenses This month</div>
              </div>
              <div className="flex flex-col  pt-[16px]">
                <div className="text-[36px] font-semibold">
                  -{formattedexpenseSum}₮
                </div>
                <div className="text-[18px] text-[#64748B]">
                  Your Income Amount
                </div>
                <div className="flex gap-2">
                  <div>{expPercentage < 0 ? <GreenDown /> : <GreenUp />}</div>
                  <div className="text-[18px]">
                    {expPercentage}% from last month
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* f-ended here */}
          {/*  */}
          <div className="flex w-full">
            <div className="flex flex-col flex-1">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Income - Expense</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig}>
                      <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar
                          dataKey="Income"
                          fill="var(--color-Income)"
                          radius={4}
                        />
                        <Bar
                          dataKey="Expense"
                          fill="var(--color-Expense)"
                          radius={4}
                        />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex flex-col flex-1 ">
              <div>
                <CircleChart />
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex w-full flex-col gap-3 bg-white py-[16px] px-[24px] rounded-lg">
            <div className="text-[16px] font-semibold">Last Records</div>
            <div className="flex flex-col gap-3 ">
              {last5Accounts.map((item) => {
                const Icon = Icons[item.category?.icon];
                return (
                  <div className="flex justify-between bg-white items-center px-6 py-3  border-t-slate-200 border-t-[1px]">
                    <div className="flex items-center gap-4">
                      <div>
                        {Icon ? <Icon color={item.category?.color} /> : <Eye />}
                      </div>
                      <div>
                        <div className="font-semibold">
                          {/* {item.category.title} */}
                        </div>
                        <div className="text-[12px] text-[#6B7280]">
                          {item.date}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        item.type === "inc"
                          ? "text-[#23E01F]"
                          : "text-[#F54949]"
                      }`}
                    >
                      {item.type === "exp" ? -item.amount : item.amount}₮
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </main>
  );
}
