import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeView, setActiveView] = useState('overview');

  const systemStats = {
    totalUsers: 1247,
    activeProjects: 23,
    serverLoad: 67,
    storageUsed: 45,
    responseTime: 89,
    uptime: 99.8
  };

  const recentActivities = [
    { id: 1, type: 'user', message: 'Новый пользователь зарегистрирован', time: '2 мин назад', status: 'success' },
    { id: 2, type: 'system', message: 'Обновление системы завершено', time: '15 мин назад', status: 'info' },
    { id: 3, type: 'error', message: 'Ошибка в модуле аналитики', time: '1 час назад', status: 'error' },
    { id: 4, type: 'project', message: 'Проект "Веб-платформа" обновлен', time: '2 часа назад', status: 'success' }
  ];

  const systemModules = [
    { id: 1, name: 'Управление пользователями', status: 'active', users: 1247, load: 23 },
    { id: 2, name: 'Система проектов', status: 'active', projects: 23, load: 45 },
    { id: 3, name: 'Аналитика', status: 'warning', reports: 156, load: 78 },
    { id: 4, name: 'Файловое хранилище', status: 'active', files: 8934, load: 34 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return 'UserPlus';
      case 'system': return 'Settings';
      case 'error': return 'AlertCircle';
      case 'project': return 'FolderOpen';
      default: return 'Bell';
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'info': return 'text-blue-600';
      case 'error': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      default: return 'text-slate-600';
    }
  };

  const getModuleStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-40">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">AdminPanel</h2>
              <p className="text-xs text-slate-500">Внутренний дешборд</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <button
              onClick={() => setActiveView('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeView === 'overview' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon name="LayoutDashboard" size={18} />
              Обзор системы
            </button>
            <button
              onClick={() => setActiveView('users')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeView === 'users' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon name="Users" size={18} />
              Пользователи
            </button>
            <button
              onClick={() => setActiveView('monitoring')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeView === 'monitoring' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon name="Activity" size={18} />
              Мониторинг
            </button>
            <button
              onClick={() => setActiveView('security')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeView === 'security' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon name="Shield" size={18} />
              Безопасность
            </button>
            <button
              onClick={() => setActiveView('logs')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeView === 'logs' ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon name="FileText" size={18} />
              Журналы
            </button>
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-6 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-slate-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900">Админ</div>
              <div className="text-xs text-slate-500">Системный администратор</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Внутренний дешборд</h1>
            <p className="text-slate-600">Управление системой и мониторинг производительности</p>
          </div>

          {/* Overview View */}
          {activeView === 'overview' && (
            <div className="space-y-6">
              {/* System Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-600">Всего пользователей</CardTitle>
                    <Icon name="Users" size={20} className="text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-slate-900">{systemStats.totalUsers}</div>
                    <p className="text-xs text-slate-500">+47 за последний день</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-600">Активные проекты</CardTitle>
                    <Icon name="FolderOpen" size={20} className="text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-slate-900">{systemStats.activeProjects}</div>
                    <p className="text-xs text-slate-500">+3 за неделю</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-600">Загрузка сервера</CardTitle>
                    <Icon name="Server" size={20} className="text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-slate-900">{systemStats.serverLoad}%</div>
                    <Progress value={systemStats.serverLoad} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-600">Время отклика</CardTitle>
                    <Icon name="Zap" size={20} className="text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-slate-900">{systemStats.responseTime}ms</div>
                    <p className="text-xs text-slate-500">Средн. за 24ч</p>
                  </CardContent>
                </Card>
              </div>

              {/* System Modules and Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Grid3x3" size={20} className="text-blue-600" />
                      Модули системы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {systemModules.map((module) => (
                        <div key={module.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-slate-900">{module.name}</h4>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge className={getModuleStatusColor(module.status)}>
                                {module.status === 'active' ? 'Активен' : module.status === 'warning' ? 'Предупреждение' : 'Ошибка'}
                              </Badge>
                            </div>
                            <Progress value={module.load} className="mt-2" />
                          </div>
                          <div className="ml-4 text-right">
                            <div className="font-bold text-slate-900">{module.load}%</div>
                            <div className="text-xs text-slate-500">Загрузка</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Bell" size={20} className="text-green-600" />
                      Последняя активность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                          <div className={`mt-1 ${getActivityColor(activity.status)}`}>
                            <Icon name={getActivityIcon(activity.type)} size={16} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-slate-900">{activity.message}</p>
                            <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Users View */}
          {activeView === 'users' && (
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={20} className="text-blue-600" />
                    Управление пользователями
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Поиск пользователей..." 
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-md"
                      />
                      <Button>
                        <Icon name="Search" size={16} className="mr-2" />
                        Найти
                      </Button>
                    </div>
                    <div className="text-center p-8 text-slate-500">
                      <Icon name="Users" size={48} className="mx-auto mb-4 text-slate-300" />
                      <p>Список пользователей загружается...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Monitoring View */}
          {activeView === 'monitoring' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-600">Время работы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">{systemStats.uptime}%</div>
                    <p className="text-xs text-slate-500">За последние 30 дней</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-600">Использование хранилища</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-700">{systemStats.storageUsed}%</div>
                    <Progress value={systemStats.storageUsed} className="mt-2" />
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-600">Активные соединения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-700">1,247</div>
                    <p className="text-xs text-slate-500">Пользователей онлайн</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Security View */}
          {activeView === 'security' && (
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Shield" size={20} className="text-green-600" />
                    Безопасность системы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="CheckCircle" size={20} className="text-green-600" />
                        <div>
                          <h4 className="font-medium text-green-900">Система защищена</h4>
                          <p className="text-sm text-green-700">Все проверки безопасности пройдены</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center p-8 text-slate-500">
                      <Icon name="Shield" size={48} className="mx-auto mb-4 text-slate-300" />
                      <p>Модуль безопасности в разработке</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Logs View */}
          {activeView === 'logs' && (
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-slate-600" />
                    Системные журналы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <select className="px-3 py-2 border border-slate-300 rounded-md">
                        <option>Все уровни</option>
                        <option>Ошибки</option>
                        <option>Предупреждения</option>
                        <option>Информация</option>
                      </select>
                      <Button variant="outline">
                        <Icon name="Download" size={16} className="mr-2" />
                        Экспорт
                      </Button>
                    </div>
                    <div className="text-center p-8 text-slate-500">
                      <Icon name="FileText" size={48} className="mx-auto mb-4 text-slate-300" />
                      <p>Журналы загружаются...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;