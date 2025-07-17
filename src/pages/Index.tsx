import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const projects = [
    { id: 1, name: 'Веб-платформа', status: 'В процессе', progress: 75, tasks: 12, completed: 9 },
    { id: 2, name: 'Мобильное приложение', status: 'Планирование', progress: 25, tasks: 8, completed: 2 },
    { id: 3, name: 'API интеграция', status: 'Завершён', progress: 100, tasks: 6, completed: 6 },
    { id: 4, name: 'Дизайн система', status: 'В процессе', progress: 60, tasks: 10, completed: 6 }
  ];

  const tasks = [
    { id: 1, title: 'Создать макеты главной страницы', project: 'Веб-платформа', priority: 'Высокий', status: 'В процессе' },
    { id: 2, title: 'Настроить базу данных', project: 'API интеграция', priority: 'Средний', status: 'Завершено' },
    { id: 3, title: 'Тестирование пользовательского интерфейса', project: 'Мобильное приложение', priority: 'Низкий', status: 'Планируется' },
    { id: 4, title: 'Оптимизация производительности', project: 'Веб-платформа', priority: 'Высокий', status: 'В процессе' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Завершён': case 'Завершено': return 'bg-green-100 text-green-800';
      case 'В процессе': return 'bg-blue-100 text-blue-800';
      case 'Планирование': case 'Планируется': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Высокий': return 'bg-red-100 text-red-800';
      case 'Средний': return 'bg-yellow-100 text-yellow-800';
      case 'Низкий': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Управление проектами</h1>
          <p className="text-slate-600">Отслеживайте прогресс и управляйте задачами команды</p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-white">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Icon name="BarChart3" size={16} />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Icon name="Settings" size={16} />
              Настройки
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Всего проектов</CardTitle>
                  <Icon name="FolderOpen" size={20} className="text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">{projects.length}</div>
                  <p className="text-xs text-slate-500">+2 за последний месяц</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Активных задач</CardTitle>
                  <Icon name="CheckSquare" size={20} className="text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">{tasks.filter(t => t.status === 'В процессе').length}</div>
                  <p className="text-xs text-slate-500">Из {tasks.length} общих</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Завершённые</CardTitle>
                  <Icon name="Trophy" size={20} className="text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">{projects.reduce((acc, p) => acc + p.completed, 0)}</div>
                  <p className="text-xs text-slate-500">Задач выполнено</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Производительность</CardTitle>
                  <Icon name="TrendingUp" size={20} className="text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">87%</div>
                  <p className="text-xs text-slate-500">Средняя эффективность</p>
                </CardContent>
              </Card>
            </div>

            {/* Projects Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FolderOpen" size={20} className="text-blue-600" />
                    Проекты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900">{project.name}</h4>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                            <span className="text-sm text-slate-500">{project.completed}/{project.tasks} задач</span>
                          </div>
                          <Progress value={project.progress} className="mt-2" />
                        </div>
                        <div className="ml-4 text-right">
                          <div className="font-bold text-slate-900">{project.progress}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CheckSquare" size={20} className="text-green-600" />
                    Последние задачи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900">{task.title}</h4>
                          <p className="text-sm text-slate-500 mt-1">{task.project}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                            <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" size={20} className="text-blue-600" />
                    Прогресс проектов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-700">{project.name}</span>
                          <span className="text-sm text-slate-500">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PieChart" size={20} className="text-purple-600" />
                    Статистика задач
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">23</div>
                        <div className="text-sm text-green-600">Завершено</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">12</div>
                        <div className="text-sm text-blue-600">В процессе</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-700">8</div>
                        <div className="text-sm text-yellow-600">Планируется</div>
                      </div>
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-700">3</div>
                        <div className="text-sm text-red-600">Просрочено</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={20} className="text-green-600" />
                  Производительность команды
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl font-bold text-blue-700 mb-2">87%</div>
                    <div className="text-sm text-blue-600">Средняя эффективность</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl font-bold text-green-700 mb-2">94%</div>
                    <div className="text-sm text-green-600">Выполнение в срок</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-3xl font-bold text-purple-700 mb-2">4.8</div>
                    <div className="text-sm text-purple-600">Средняя оценка качества</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-slate-600" />
                    Настройки проекта
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Название команды</label>
                    <input className="w-full p-2 border border-slate-300 rounded-md" defaultValue="Команда разработки" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Уведомления</label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="notifications" defaultChecked />
                      <label htmlFor="notifications" className="text-sm text-slate-600">Включить email уведомления</label>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить настройки
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={20} className="text-blue-600" />
                    Управление командой
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Анна Петрова</div>
                          <div className="text-sm text-slate-500">Руководитель проекта</div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Активен</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">Михаил Сидоров</div>
                          <div className="text-sm text-slate-500">Разработчик</div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Активен</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить участника
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;