import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Brain, Briefcase, MessageCircle, User} from 'lucide-react';
import {communicationPreferences, personalInfo, values, workExperience,} from './data'; // 确保路径正确

export default function PersonalManual() {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                个人使用说明书
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-gradient-to-br from-purple-100 to-indigo-100">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <User className="w-6 h-6 mr-2 text-indigo-600"/>
                            个人介绍
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg"><strong>年龄:</strong> {personalInfo.age}</p>
                        <p className="text-lg"><strong>学历:</strong> {personalInfo.education}</p>
                        <p className="text-lg"><strong>性格:</strong> {personalInfo.personality}</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-100 to-teal-100">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Brain className="w-6 h-6 mr-2 text-teal-600"/>
                            三观
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg"><strong>世界观:</strong> {values.worldView}</p>
                        <p className="text-lg"><strong>人生观:</strong> {values.lifeView}</p>
                        <p className="text-lg"><strong>价值观:</strong> {values.valuesList.join(', ')}</p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Briefcase className="w-6 h-6 mr-2 text-blue-600"/>
                            职业履历时间线
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="relative border-l border-gray-200">
                            {workExperience.map((job, index) => (
                                <li key={index} className="mb-10 ml-6">
                  <span
                      className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                    <Briefcase className="w-3 h-3 text-blue-800"/>
                  </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                        {job.title}
                                        {job.current && (
                                            <span
                                                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">现在</span>
                                        )}
                                    </h3>
                                    <time
                                        className="block mb-2 text-sm font-normal leading-none text-gray-400">{job.time}</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">{job.description}</p>
                                </li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-100 to-emerald-100">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MessageCircle className="w-6 h-6 mr-2 text-emerald-600"/>
                            喜欢的沟通方式
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            {communicationPreferences.likes.map((like, index) => (
                                <li key={index}>{like}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-100 to-pink-100">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MessageCircle className="w-6 h-6 mr-2 text-pink-600"/>
                            不喜欢的沟通方式
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            {communicationPreferences.dislikes.map((dislike, index) => (
                                <li key={index}>{dislike}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8 text-center">
                <Badge variant="outline" className="text-lg p-2">
                    持续更新中...
                </Badge>
            </div>
        </div>
    );
}
